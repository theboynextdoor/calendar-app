import { assert } from 'chai';
import withinCharLimit from "../withinCharLimit";

describe("withinCharLimit(str, maxLimit, minLimit)", () => {
  it("should return true when an empty string is provided and no minLimit is passed", () => {
    let actual = withinCharLimit("", 10); 
    let expected = true; 
    
    assert.strictEqual(actual, expected); 
  });
  
  it("should return true when a string is within the max and min limit", () => {
    let actual = withinCharLimit("david", 15, 5); 
    let expected = true; 
    
    assert.strictEqual(actual, expected);  
  });
});