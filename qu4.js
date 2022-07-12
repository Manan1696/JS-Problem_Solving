//Q4. Reverse a Number.
//Write a program which takes a numebr N as input from the user and You need to reverse the number.

//Note: You have to complete Reverse_Number function. No need to take any input.

 
var Reverse_Number = (N) => 
{
  let revno = 0;
  while(N>0)
  {
    revno = revno * 10 + N % 10;
    N = parseInt(N / 10);
  }
  return revno;
};