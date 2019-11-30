

var cartEl = document.getElementById('cart');
var inputNameEl = document.getElementById('name');
//var inputPriceEl = document.getElementById('price');
//var totalEl = document.getElementById('total-price');
var currentIndex = 0;
//var total = 0;



function addToCart() {
  if ( inputNameEl.value !== '' ) {
    cartEl.innerHTML += '<li id="' + currentIndex + '"><label class="control control--checkbox">' + inputNameEl.value + '<input type="checkbox"/><div class="control__indicator"></div></label> <button class="removeBtn" onclick="removeFromCart(' + currentIndex + ')">x</button></li>';
    currentIndex += 1;
    //total += parseInt(inputPriceEl.value);
    //totalEl.innerHTML = total ;
    inputNameEl.value = "";
    //inputPriceEl.value = "";
  }
}

var cartEl1 = document.getElementById('cart1');
var inputNameEl1 = document.getElementById('name1');
//var inputPriceEl1 = document.getElementById('price1');
//var totalEl1 = document.getElementById('total-price1');
var currentIndex1 = 0;
//var total1 = 0;

function addToCart1() {
  if ( inputNameEl1.value !== '' ) {
    cartEl1.innerHTML += '<li id="' + currentIndex1 + '"><label class="control control--checkbox">' + inputNameEl1.value + '<input type="checkbox"/><div class="control__indicator"></div></label> <button class="removeBtn" onclick="removeFromCart1(' + currentIndex1 + ')">x</button></li>';
    currentIndex1 += 1;
    //total1 += parseInt(inputPriceEl1.value);
    //totalEl1.innerHTML = total1 ;
    inputNameEl1.value = "";
    //inputPriceEl1.value = "";
  }
}

function removeFromCart(index) {
  console.log(index);
  var liEl = document.getElementById(index.toString()).remove();
};

function removeFromCart1(index) {
  console.log(index);
  var liEl = document.getElementById(index.toString()).remove();
};


