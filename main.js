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


