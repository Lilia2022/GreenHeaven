let menuList = document.getElementById("menuList");
menuList.style.maxHeight ="0px";

function togglemenu(){
    if(menuList.style.maxHeight =="0px"){
        menuList.style.maxHeight ="200px";
    }
    else{
        menuList.style.maxHeight ="0px";
    }
    

}


let productList = [];
 
function addListing() {
    const productName = document.getElementById("productName").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").files[0];
 
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = function () {
        const product = {
            name: productName,
            price: price,
            image: reader.result
        };
        productList.push(product);
        displayProducts();
    };
}
 
function displayProducts() {
    const productListDiv = document.getElementById("productList");
    productListDiv.innerHTML = "";
 
    productList.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
 
        const image = document.createElement("img");
        image.src = product.image;
 
        const productName = document.createElement("span");
        productName.textContent = product.name;
 
        const productPrice = document.createElement("span");
        productPrice.textContent = "Price: $" + product.price;
 
        productDiv.appendChild(image);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
 
        productListDiv.appendChild(productDiv);
    });
}
 
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
 
    if (message !== "") {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = "You: " + message;
        document.getElementById("messages").appendChild(messageDiv);
 
        // Clear input after sending message
        messageInput.value = "";
 
        // Scroll to bottom of messages
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
    }
}