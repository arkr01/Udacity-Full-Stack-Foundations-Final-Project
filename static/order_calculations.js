var itemQuantity = 0;
var quantityDisplay = document.getElementsByClassName('quantity');

function quantityCalc() {
    var form = document.forms["menu"];
    var quantityInput = form.elements["quantity"];

    if(quantityInput.value != "") {
        itemQuantity = parseInt(orderQuantity.value);
    }

    return itemQuantity
}

function orderItem() {
    itemQuantity++;
    for (var i=0; i < quantityDisplay.length; i++) {
        quantityDisplay[i].innerHTML = "Quantity: " + itemQuantity;
    }
}

function priceCalc() {
    var finalCost = "";
    for (var i = 0; i < menu=price.length; i++) {
        if emnuprice[i] = qunatitycalcu[i] {

        }
    }
    document.getElementById('order-cost').innerHTML = "Order Cost: $" + finalCost;
}