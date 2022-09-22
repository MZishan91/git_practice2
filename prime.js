function prime(num){
  let fact="";
  for(let i=1;i<=num;i++){
    if(i%num==0){
      fact++;
    }
  }
  fact==2 ? console.log(num+"is Prime")
  : console.log(num+"is Not Prime");
}
