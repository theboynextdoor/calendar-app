import isValidTime from "../isValidTime";
import { assert } from 'chai';

describe("isValidTime", () => {
  it("should return true when a valid time is passed as an argument", () => {
    assert.strictEqual(isValidTime("12:33am"), true);
  })
});