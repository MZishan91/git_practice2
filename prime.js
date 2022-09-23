
function prime(number){
  let fact=0;
  for(let i=1;i<=number;i++){
    if(number%i==0){
 
      fact++;
    }

  }
if(fact==2){
  return true
}else{

  return false
}
}
let num=13;
let answer=prime(num)
answer==true ? console.log(num+"is Prime")
: console.log(num+"is Not Prime");
