import test from "node:test";
import assert from "node:assert/strict";

// DeepSeek-V4-Flash occasionally emits tool calls in a non-standard "DSML"
// text format using full-width pipes (U+FF5C), e.g.
//   <｜DSML｜:Read>\n<path>images/x.png</path>\n</｜DSML｜:Read>
// or, when a tool call is truncated mid-stream, only the closing markers:
//   </｜DSML｜parameter>\n</｜DSML｜invoke>\n</｜DSML｜tool_calls>
// The openai-compatible path must not leak these markers to the client as
// visible content. Complete DSML blocks are parsed into tool calls; stray
// closing markers (and the system-prompt echo they sometimes ride on) are
// stripped from content.
const { parseDsmlToolCalls } = await import("../../open-sse/utils/dsmlToolCalls.ts");

const FW = "\u{FF5C}"; // full-width vertical line ｜

test("parseDsmlToolCalls: successive close matches preserve surrounding text and arguments", () => {
  const content =
    `before <${FW}DSML${FW}:Read><path>a.txt</path></${FW}DSML${FW}:Read>` +
    ` between <|DSML|:Write><parameter name="text">hello</parameter></|DSML|:Write> after`;
  const result = parseDsmlToolCalls(content);
  assert.equal(result.content, "before  between  after");
  assert.equal(result.holdback, "");
  assert.deepEqual(
    result.toolCalls.map((call) => ({
      name: call.function.name,
      arguments: JSON.parse(call.function.arguments),
    })),
    [
      { name: "Read", arguments: { path: "a.txt" } },
      { name: "Write", arguments: { text: "hello" } },
    ]
  );
});

test("parseDsmlToolCalls: a closer at offset zero consumes an empty call", () => {
  const result = parseDsmlToolCalls("<|DSML|:Ping></|DSML|:Ping>tail");
  assert.equal(result.content, "tail");
  assert.equal(result.holdback, "");
  assert.equal(result.toolCalls.length, 1);
  assert.deepEqual(JSON.parse(result.toolCalls[0].function.arguments), {});
});

test("parseDsmlToolCalls: a missing matching closer retains the entire unfinished call", () => {
  const unfinished = "<|DSML|:Read><path>a.txt</path></|DSML|:Write>";
  const result = parseDsmlToolCalls(`before ${unfinished}`);
  assert.equal(result.content, "before ");
  assert.equal(result.holdback, unfinished);
  assert.deepEqual(result.toolCalls, []);
});

test("parseDsmlToolCalls: complete <｜DSML｜:Tool>...</｜DSML｜:Tool> becomes a tool call", () => {
  const content = `<${FW}DSML${FW}:Read>\n<path>images/omniroute.png</path>\n</${FW}DSML${FW}:Read>`;
  const result = parseDsmlToolCalls(content);
  assert.equal(result.toolCalls.length, 1, "one tool call extracted");
  assert.equal(result.toolCalls[0].function.name, "Read");
  assert.deepEqual(JSON.parse(result.toolCalls[0].function.arguments), {
    path: "images/omniroute.png",
  });
  assert.equal(result.content.trim(), "", "no residual DSML in content");
});

test("parseDsmlToolCalls: stray closing DSML markers are stripped from content", () => {
  // The 2026-08-24 broken case (call log 1787566395384-bab9ab): only closing
  // markers, no opening, tool_calls absent, finish_reason "stop".
  const content = `</${FW}DSML${FW}parameter>\n</${FW}DSML${FW}invoke>\n</${FW}DSML${FW}tool_calls>`;
  const result = parseDsmlToolCalls(content);
  assert.equal(result.toolCalls.length, 0, "no tool call from stray closers");
  assert.equal(result.content.trim(), "", "stray markers removed from content");
});

test("parseDsmlToolCalls: mixed ASCII + DSML closing markers are stripped", () => {
  // 2026-08-23 variant: </parameter></invoke></｜DSML｜tool_calls>
  const content = `</parameter>\n</invoke>\n</${FW}DSML${FW}tool_calls>`;
  const result = parseDsmlToolCalls(content);
  assert.equal(result.toolCalls.length, 0);
  assert.equal(result.content.trim(), "", "mixed closers removed");
});

test("parseDsmlToolCalls: closing markers trailing an echoed prompt are removed", () => {
  // 2026-08-20 case: a system-prompt echo followed by three DSML closers.
  const echo = "# Harness CWD note\n\nsome echoed text.\n";
  const content = `${echo}</${FW}DSML${FW}parameter>\n</${FW}DSML${FW}invoke>\n</${FW}DSML${FW}tool_calls>`;
  const result = parseDsmlToolCalls(content);
  assert.equal(result.toolCalls.length, 0);
  // The echoed preamble is retained (it is not a DSML marker); only the
  // trailing DSML closers are removed.
  assert.equal(result.content, echo, "echo retained, markers removed");
  assert.ok(!result.content.includes("DSML"), "no DSML marker remains");
});

test("parseDsmlToolCalls: content with no DSML markers passes through unchanged", () => {
  const content = "Hello, this is a normal response with no markers.";
  const result = parseDsmlToolCalls(content);
  assert.equal(result.toolCalls.length, 0);
  assert.equal(result.content, content);
});

test("parseDsmlToolCalls: partial opening marker at the tail is held back (streaming-safe)", () => {
  // A truncated stream might end mid-marker; the partial opener must not leak.
  const content = `normal text <${FW}DSML${FW}:Wri`;
  const result = parseDsmlToolCalls(content);
  assert.equal(result.toolCalls.length, 0);
  assert.equal(result.content, "normal text ", "safe text emitted, partial opener held back");
  assert.equal(
    result.holdback,
    "<" + FW + "DSML" + FW + ":Wri",
    "partial opener returned as holdback"
  );
});
