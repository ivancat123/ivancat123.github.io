var myHeading = document.querySelector('h1');
myHeading.textContent = 'hello';
var myVariable = 'Bob';
console.log(myVariable)
var a = 10;
console.log(a)
var b = true;
console.log(b)
//aaa
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
multiply(4,7);
multiply(20,20);
multiply(0.5,3);

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

function sumdel(x,y)
{
	console.log((x+y)*10)
}
sumdel(143,1)
sumdel(12,12)
sumdel(123,3)
//document.querySelector('html').onclick = function() {
//alert('Ouch! Stop poking me!');}
var myImage = document.querySelector('img');
myImage.onclick = function() {
var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/logo.png') {
myImage.setAttribute ('src','images/logo2.png');
} else {
myImage.setAttribute ('src','images/logo.png');
}
}

