//Q3. Perfect Number Check.
//Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.Now, You are given an integer N, write a program to check whether the given number is a Perfect Number or not.

//Note: You have to complete Perfect _Check function. No need to take any input.

var Perfect_Check = (N) => 
{
  var total = 0;
  for(let i=1; i<=N; i++){
  if(N%i === 0)
    total += 1;
}
 if(total === N){
  return ("YES");
}
 else{
  return ("NO");
}    
};
 