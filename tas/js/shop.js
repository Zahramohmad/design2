function changeImageSrc(anything){
    document.querySelector('.phonee').src = anything;
    
}
// cart slid
let cartIcon = document.querySelector('#carticon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};

// cart working

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

// Making Function
function ready(){
    var removeCartButtons = document.getElementsByClassName("remove-cart");
    console.log(removeCartButtons);

    for (var i = 0; i < removeCartButtons.length; i++){
        var button =removeCartButtons[i]
        button.addEventListener("click", removeCartItem);
    }
    // quantity chang
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change",quantityChanged);
    }
    // add card
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click",addCartClicked);
    }

// ?buy button work
document.getElementsByClassName("btn-buy")[0]
.addEventListener("click",buyButtonClicked);
}
// ?buy button work
function buyButtonClicked(){
alert("Your Order Is Aready");
var carcontent = document.getElementsByClassName(" cart-content ")[0];
while(carcontent.hasChildNodes()){
    carcontent.removeChild(carcontent.firstChild);
}
updatetotal();
}

// remove item
function removeCartItem (event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// quantity 
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
    input.value = 0;
    }
    updatetotal();
}
// add to cart
function addCartClicked (event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var price = shopProducts.getElementsByClassName("pricess")[0].innerText;
    var tit = shopProducts.getElementsByClassName("titles")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("mam")[0].src;
    addProductToCart(price,tit,productImg);
    updatetotal();
}

function addProductToCart(price,tit,productImg) {
    var cartShopBox = document.createElement("div");
cartShopBox.classList.add("cat-box");
var cartItems = document.getElementsByClassName("cart-content")[0];
var cartItemsNames = cartItems.getElementsByClassName("card-title");
for (var i = 0; i < cartItemsNames.length; i++){
    alert(" You Have Aready Add This Item");
    return;
}

}
    var  cartBoxContent = `
                    <img src="${productImg}" width="120px" alt="">
                        <div class="detail-box">
                        <div class="card-title">${tit}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity"> 
                            </div>
                            <!-- remove cart -->
                            <i class='bx bxs-trash remove-cart' ></i>`;
                            
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("remove-cart")[0].addEventListener("click",removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged);



// updatetotal
function updatetotal() {
    var carcontent =  document.getElementsByClassName("cart-content")[0];
    var cartBoxes =  carcontent.getElementsByClassName("cat-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value
        total = total + price * quantity;
        
    }
    total = Math.round(total*100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "$"+ total;
   
}









