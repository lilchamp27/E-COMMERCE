class Product {
    constructor(productName, productPrice, image, starratings) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.image = image;
        this.starratings = starratings;
    }

    // Method to create the product card
    createProductCard() {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "card");

        // Product Image
        let productImage = document.createElement("img");
        productImage.setAttribute("class", "imgrst");
        productImage.src = this.image;
        productCard.appendChild(productImage);

        // Product Name
        let productName = document.createElement("h3");
        productName.setAttribute("class", "nameofprod");
        productName.innerHTML = this.productName;
        productCard.appendChild(productName);

        // Product Price
        let productPrice = document.createElement("p");
        productPrice.innerHTML = this.productPrice;
        productCard.appendChild(productPrice);

        // Return the product card
        return productCard;
    }
}

// Array of products
const products = [
    new Product("ASUS W100 Optical Wireless Mouse", "$129.00", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT0yqRVehEUbTakV8cJLUqNXQoUJocyBvWcQezTyRpPRVk8NDg1e7zIC07n_VsNp0-GoXWCaeLCGascB-LfH7qsy-R1cYVpNn5A1x-0GaGge36ZMgAiHyUKGPWEcuxS&usqp=CAc", " "),
    new Product("Logitech H200 STEREO Headset", "$349.00", "https://m.media-amazon.com/images/I/616fZvKWnOL._AC_UF1000,1000_QL80_.jpg", " "),
    new Product("Fujifilm X99 Mirrorless Digital Camera", "$239.00", "https://cameratrader.ng/wp-content/uploads/2019/05/FUJIFILM-X-T10-Mirrorless-Digital-Camera-with-16-50mm-Lens-.jpeg", " "),
    new Product("ASUS M220 Gaming Headphone", "$249.00", "https://m.media-amazon.com/images/I/31yfUPK5nPL._AC_.jpg", " "),
    new Product("Dahua HACP HD Eyeball CC camera", "$219.00", "https://techgpts.com/public/uploads/all/N1h5qkU32Qbz2CrZUcFfcBXO2AcPrL7FgZQkG9ax.jpg", " "),
    new Product("Fujifilm H50 Mirrorless Digital Camera", "$349.00", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49yEXu6oQsF72zfQTeP4GCz3krDfHPc9IvA&s", " "),
    new Product('Asus E30M Celeron 14.6" HD Laptop', "$1,499.00", "https://jslaptop.com/cdn/shop/files/512vKnX8CBL._AC_SL1024.jpg?v=1684185073", " "),
    new Product("Hikvision DS30 HD Bullet CC Camera", "$349.00", "https://cdn.shopaccino.com/startech/products/ds-2ce1ad0t-it1f-500x500-900360_m.jpeg?v=407", " ")
];

// Rendering products to the DOM
class ProductDisplay {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    renderProducts(products) {
        products.forEach(product => {
            let productCard = product.createProductCard();
            this.container.appendChild(productCard);
        });
    }
}

// Instantiate ProductDisplay and render the products
const productDisplay = new ProductDisplay("featuredproducts");
productDisplay.renderProducts(products);
