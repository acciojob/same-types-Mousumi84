function isSameType(value1, value2) {
	let ans;
	//console.log(typeof value1 + typeof value2);
  if((value1===value2) || (typeof value1==typeof value2))
	 {
	     ans="true";
	 }
	else
     {
		 ans="false";
	 }
	
	return ans;
}
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

