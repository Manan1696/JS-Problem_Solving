//Q1. Find the Smaller Angle
//PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.

//Note: You have to complete Minimal_Angle function. No need to take any input.


var Minimal_Angle = (h, m) => 
{
  let check = 0;
	h = h % 12;
  
  var hm = 0.5 * m, 
      hh = 30 * h, 
      ma = 6 * m, 
      sum = Math.abs(hm + hh - ma); 
  return check ? 360 - sum : sum;     
};