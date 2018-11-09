export default function withinCharLimit(str, maxLimit, minLimit = 0) {
  if (typeof str !== "string") {
    throw new Error(`${str} is not a string type`);
  }
  
  let strCount = str.length; 
  
  if (strCount > maxLimit) {
    return false; 
  } else if (strCount < minLimit) {
    return false; 
  }
  
  return true; 
}