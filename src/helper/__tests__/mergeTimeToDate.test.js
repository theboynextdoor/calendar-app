import parse from "date-fns/parse";
import mergeTimeToDate from "../mergeTimeToDate"; 

describe("mergeTimeToDate()", () => {
  it("should do something", () => {
    let date = "Nov 6, 2018"; 
    let time = "9:30pm";
    
    console.log(mergeTimeToDate(time, date));
  })
})