function prime(num){
  let fact=0;
  for(let i=1;i<=num;i++){
i    if(num%i==0){
      fact++;
    }
  }
  fact==2 ? console.log(num+"is Prime")
  : console.log(num+"is Not Prime");
}
