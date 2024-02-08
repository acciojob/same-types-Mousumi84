function isSameType(value1, value2) {
	let ans;
  if((value1===value2) || (value1==NaN && value2==NaN))
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
