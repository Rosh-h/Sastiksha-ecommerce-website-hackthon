/* get cart total from session on load */
updateCartTotal();

/* button event listeners */
document.getElementById("emptycart").addEventListener("click", emptyCart);
var btns = document.getElementsByClassName('addtocart');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () { addToCart(this); });
}

/* ADD TO CART functions */

function addToCart(elem) {
    //init
    var sibs = [];
    var getprice;
    var getproductName;
    var cart = [];
    var stringCart;
    //cycles siblings for product info near the add button
    while (elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if (elem.className == "price") {
            getprice = elem.innerText;
        }
        if (elem.className == "productname") {
            getproductName = elem.innerText;
        }
        sibs.push(elem);
    }
    //create product object
    var product = {
        productname: getproductName,
        price: getprice
    };

    var stringProduct = JSON.stringify(product);


    if (!sessionStorage.getItem('cart')) {

        cart.push(stringProduct);

        stringCart = JSON.stringify(cart);

        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
    else {

        cart = JSON.parse(sessionStorage.getItem('cart'));

        cart.push(stringProduct);

        stringCart = JSON.stringify(cart);

        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
}

function updateCartTotal() {
    var total = 0;
    var price = 0;
    var items = 0;
    var productname = "";
    var carttable = "";
    if (sessionStorage.getItem('cart')) {

        var cart = JSON.parse(sessionStorage.getItem('cart'));
        //get no of items in cart 
        items = cart.length;
        //loop over cart array
        for (var i = 0; i < items; i++) {
            //convert each JSON product in array back into object
            var x = JSON.parse(cart[i]);
            //get property value of price
            price = parseFloat(x.price.split('Rs')[1]);
            productname = x.productname;
            //add price to total
            carttable += "<tr><td>" + productname + "</td><td>Rs " + price.toFixed(2) + "</td></tr>";
            total += price;
        }
        
    }
    //update total on website HTML
    document.getElementById("total").innerHTML = total.toFixed(2);
    //insert saved products to cart table
    document.getElementById("carttable").innerHTML = carttable;
    //update items in cart on website HTML
    document.getElementById("itemsquantity").innerHTML = items;
}
//user feedback on successful add
function addedToCart(pname) {
    var message = pname + " was added to the cart";
    var alerts = document.getElementById("alerts");
    alerts.innerHTML = message;
    if (!alerts.classList.contains("message")) {
        alerts.classList.add("message");
    }
}
/* User Manually empty cart */
function emptyCart() {
    //remove cart session storage object & refresh cart totals
    if (sessionStorage.getItem('cart')) {
        sessionStorage.removeItem('cart');
        updateCartTotal();
        //clear message and remove class style
        var alerts = document.getElementById("alerts");
        alerts.innerHTML = "";
        if (alerts.classList.contains("message")) {
            alerts.classList.remove("message");
        }
    }
}

// function to add number on cart
function addCartNum() {
    var noti = document.querySelector('h1');
    var select = document.querySelector('.select');
    var button = document.getElementsByTagName('button');
    for (var but of button) {
        but.addEventListener('click' , (e) => {
            var add = Number(noti.getAttribute('data-count') || 0);
            noti.setAttribute('data-count', add + 1);
            noti.classList.add('zero');
        })

}
}