
var minus_1 = 0;
var minus_2 = 0;
var minus_3 = 0;
var minus_4 = 0;
var minus_5 = 0;


function changeSign(id)
{
 if(id == 1)
 {
  var sign = document.getElementById("minus-1");
  if(minus_1 == 0)
  {
 sign.className = "fa fa-minus-square";
 minus_1 = 1;
  }
  else{
    sign.className = "fas fa-plus-square";
    minus_1 = 0;
  }
 }

 if (id == 2) {
  var sign = document.getElementById("minus-2");
  if (minus_2 == 0) {
    sign.className = "fa fa-minus-square";
    minus_2 = 1;
  } else {
    sign.className = "fas fa-plus-square";
    minus_2 = 0;
  }
 }

 if (id == 3) {
  var sign = document.getElementById("minus-3");
  if (minus_3 == 0) {
    sign.className = "fa fa-minus-square";
    minus_3 = 1;
  } else {
    sign.className = "fas fa-plus-square";
    minus_3 = 0;
  }
 }

 if (id == 4) {
  var sign = document.getElementById("minus-4");
  if (minus_4 == 0) {
    sign.className = "fa fa-minus-square";
    minus_4 = 1;
  } else {
    sign.className = "fas fa-plus-square";
    minus_4 = 0;
  }
 }

 if(id == 5)
 {
  var sign = document.getElementById("minus-5");
  if (minus_5 == 0) {
    sign.className = "fa fa-minus-square";
    minus_5 = 1;
  } else {
    sign.className = "fas fa-plus-square";
    minus_5 = 0;
  }
 }
 }
