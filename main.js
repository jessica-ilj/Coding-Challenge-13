// Fetch Products from the API Using Fetch and Promises
let fetchProducts = new Promise(function(resolve, reject) {
    console.log("Fetching products from API...");
    fetch('https://api.example.com/products') // Replace with actual API URL
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch products");
            }
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(new Error("Failed to load products. Please try again later."));
        });
});


// Display Product Details Dynamically
fetchProducts
    .then(products => {
        const productContainer = document.getElementById("product-container");

        products.forEach(product => {
            // Create and append product elements dynamically
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.name;
            productDiv.appendChild(img);

            const companyName = document.createElement("h3");
            companyName.textContent = product.company;
            productDiv.appendChild(companyName);

            const productName = document.createElement("p");
            productName.textContent = product.name;
            productDiv.appendChild(productName);

            const price = document.createElement("p");
            price.textContent = `$${product.price}`;
            productDiv.appendChild(price);

            productContainer.appendChild(productDiv);
        });
    })

