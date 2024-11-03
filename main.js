// Fetch Products from the API Using Fetch and Promises
let fetchProducts = new Promise(function(resolve, reject) {
    console.log("Fetching products from API...");
    fetch('https://www.course-api.com/javascript-store-product') 
        .then(response => {  
            if (response.ok) {            // Check if the response is ok
                return response.json();
            } else {
                throw new Error("Failed to fetch products");
            }
        })
        .then(data => {      // Process the product data and add each product to the page
            resolve(data);
        })
        .catch(error => {
            reject(new Error("Failed to load products. Please try again later."));
        });
});

            
            

// Display Product Details Dynamically
fetchProducts.then(products => {
        const productContainer = document.getElementById("product-container");

        products.forEach(product => {       // Create and append product elements dynamically
const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const img = document.createElement("img");     // Create elements for each product's details: name, price, image, and company
            img.src = product.image;      // Set attributes and content for each element
            img.alt = product.name;
            productDiv.appendChild(img); // Append product elements to the product container in HTML

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
//handle errors

.catch(error => {
        console.log(error.message);
        document.getElementById("product-container").textContent = error.message;
    });
