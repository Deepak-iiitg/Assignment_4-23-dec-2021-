var num = parseInt(prompt("enter a number"));

var flag = 0;
for(var i=1 ; i<=num; i++){
 	if(num%i == 0){
 		flag++;
 	}
 }
 if(flag == 2){
    console.log("number num is prime");
 }
 else{
 	console.log("number num is not prime");
 }