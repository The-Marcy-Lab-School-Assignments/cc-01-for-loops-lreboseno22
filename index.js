//1
function countToFifty(){
  for (let i = 1; i <= 50; i++){
      console.log(i)
  }  
}
countToFifty()

//2
function countFromOne(number){
  for (let i = 1; i <= number; i++){
      console.log(i)
  }
}
countFromOne(5)
//3
function threeAndFiveInFifty(){
  
}

//4
function threeAndFive(){
  
}

function triple(numbers){
 let result = numbers.map(function(num){
    return num * 3;
});
  return result;
}

console.log( triple([1, 2, 3]) )