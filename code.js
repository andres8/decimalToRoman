$(document).ready(function(){
  $('#botoncito').click(function(){
    let numToChange = $('#numero').val();

    if (isNaN(numToChange)=== false){
      convertToRoman(numToChange);
      $('#numero').val(l);
      l='';
    }
    else {
      alert("You didn't insert a number")
    }
  });
  $('#numero').keypress(function(key){
    if(key.which==13){
      $('#botoncito').click();
    }
  });
});
var l = '';
function convertToRoman(num) {
  var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

  for (var i=0; i<decimal.length; i++){
    for (var j;decimal[i] <= num; num-= decimal[i]){
      l+= roman[i];
    }
  }
 return l;
}
