// NOTICE: We're only running with qunit-cli, not the browser
QUnit = require("qunit-cli");
QUnit.module("test");

test("sample test", function() {
  ok(true, "sample test passes");
});
