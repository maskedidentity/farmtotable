const products = [
    { id: 1, name: "Apple", price: 1.00, category: "fruits", image: "images/apple.jpg" },
    { id: 2, name: "Banana", price: 0.50, category: "fruits", image: "images/banana.jpg" },
    { id: 3, name: "Carrot", price: 0.80, category: "vegetables", image: "images/carrot.jpg" },
    { id: 4, name: "Broccoli", price: 1.20, category: "vegetables", image: "images/broccoli.jpg" },
    { id: 5, name: "Salmon", price: 5.00, category: "fish", image: "images/salmon.jpg" },
    { id: 6, name: "Tuna", price: 3.50, category: "fish", image: "images/tuna.jpg" }
];

function displayProducts(filteredProducts = products) {
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
            </div>
        `;
    });
}

function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

function searchProducts() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    displayProducts(filtered);
}

let cart = [];

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    document.getElementById("cart-count").innerText = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = () => displayProducts();
