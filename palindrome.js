$(document).ready(function() {
  function palindrome(str) {
  let counter=0;
  let revArr=[]; //store reversed array
  let newArr;
  
  str=str.toLowerCase(); //ignore case
  newArr=str.match(/[a-z0-9]/g); // strip out non-alphanumeric
  
  // create new array with orig array reversed
  for (let i=0;i<newArr.length;i++){
    revArr[i]=newArr[newArr.length-1-i];
    console.log(newArr.length-1-i);
  }
  //compare arrays to see if equal
  console.log("reve"+revArr);
  for(let i=0;i<newArr.length;i++){
    if(revArr[i] === newArr[i]){
      counter++;
    }
  }

  return counter==newArr.length;
} // end palindrome
  
$("#searchbutton").click(function(){
  
  var searchterm = document.getElementById('searchInput');
  
  searchterm=searchterm.value;
  if(palindrome(searchterm)){
  
    $("#answer").html("Yes!");
    }
   else if (!palindrome(searchterm)){
  
    $("#answer").html("No");
    };

});
  

  
});
