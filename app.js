// products 
const products = [
    {
        name: 'Sony Playstation 5',
        url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
        category: 'games',
        price: '₹ 49,999',
    },
    {
        name: 'Samsung Galaxy',
        url: 'https://i.ibb.co/rFFMDH7/samsung-galaxy.png',
        category: 'smartphones',
        price: '₹ 39,999',
    },
    {
        name: 'Cannon EOS Camera',
        url: 'https://i.ibb.co/mhm1hLq/cannon-eos-camera.png',
        category: 'cameras',
        price: '₹ 74,999',
    },
    {
        name: 'Sony A7 Camera',
        url: 'https://i.ibb.co/LS9TDLN/sony-a7-camera.png',
        category: 'cameras',
        price: '₹ 1,99,999',
    },
    {
        name: 'LG TV',
        url: 'https://i.ibb.co/QHgFnHk/lg-tv.png',
        category: 'televisions',
        price: '₹ 79,999',
    },
    {
        name: 'iPhone 16',
        url: 'https://pngimg.com/d/iphone16_PNG3.png',
        category: 'smartphones',
        price: '₹ 79,999',
    },
    {
        name: 'Nintendo Switch',
        url: 'https://i.ibb.co/L0L9SdG/nintendo-switch.png',
        category: 'games',
        price: '₹ 29,999',
    },
    {
        name: 'MackBook M3',
        url: 'https://d2e6ccujb3mkqf.cloudfront.net/1e1ec3c9-c221-4651-870c-74d2c8c28a3c-1_76a3b9d6-f15b-4e63-987a-2e5b3f92e137.jpg',
        category: 'computers',
        price: '₹ 1,10,000',
    },
    {
        name: 'Ipods Pro',
        url: 'https://iplanet.one/cdn/shop/files/airpods_pro_PDP_US_1.jpg?v=1691163669',
        category: 'earbuds',
        price: '₹ 19,999',
    },
    {
        name: 'Samsung Watch',
        url: 'https://www.pc-tablet.co.in/wp-content/uploads/2024/06/Samsung-Galaxy-Watch-FE-Confirmed-by-Companys-Website.webp',
        category: 'watchs',
        price: '₹ 25,000',
    },
    {
        name: 'Xbox Series X',
        url: 'https://i.ibb.co/C8rBVdT/xbox-series-x.png',
        category: 'games',
        price: '₹ 49,999',
    },
    {
        name: 'Samsung TV',
        url: 'https://i.ibb.co/Pj1nm4B/samsung-tv.png',
        category: 'televisions',
        price: '₹ 1,09,999',
    },
    {
        name: 'Google Pixel',
        url: 'https://i.ibb.co/5F58zmH/google-pixel.png',
        category: 'smartphones',
        price: '₹ 49,999',
    },
    {
        name: 'Computer',
        url: 'https://res.cloudinary.com/jawa/image/upload/f_auto,ar_1:1,c_fill,w_3840,q_auto/production/listings/hhbcxfaue6ir2eyxgdl7',
        category: 'computers',
        price: '₹ 89,999',
    },
    {
        name: 'Sony ZV1F',
        url: 'https://i.ibb.co/5Wy3RZ9/sony-zv1f-camera.png',
        category: 'cameras',
        price: '₹ 79,999',
    },
    {
        name: 'Toshiba TV',
        url: 'https://i.ibb.co/FxM6rXq/toshiba-tv.png',
        category: 'televisions',
        price: '₹ 49,999',
    },
];


let productsWrapper = document.querySelector(".product-wrapper");
let cartItemCount = document.querySelector(".cart-item-count");
let checkBoxes = document.querySelectorAll(".check");
let searchInput = document.querySelector(".search-input");
let filters = document.querySelector(".filters");


// create product elements
const createProductElement = (product) => {
    const productElement = document.createElement("div");
    productElement.className = `item`
    productElement.innerHTML = `<div>
                    <img src="${product.url}" alt="">
                    <button class="item-status">Add To Cart</button>
                </div>
                <p>${product.name}</p>
                <strong>${product.price}</strong>`

    productElement.querySelector(".item-status")
        .addEventListener("click", updateCart);
    return productElement;
};

// update cart count
let cartCount = 0;
const updateCart = (e) => {
    let statusEl = e.target;

    if (statusEl.classList.contains('added')) {
        statusEl.classList.remove('added');
        cartCount--;
        cartItemCount.innerHTML = cartCount;
        statusEl.innerHTML = "Add To Cart";
        statusEl.style.backgroundColor = "black";
        statusEl.style.color = "white";
    }
    else {
        statusEl.classList.add('added');
        cartCount++;
        cartItemCount.innerHTML = cartCount;
        statusEl.innerHTML = "Remove From Cart";
        statusEl.style.backgroundColor = "red";
        statusEl.style.color = "white";
    }
};


// filter products function
const filterProducts = () => {
    // search term & checked categories
    const searchTerm = searchInput.value.trim().toLowerCase();
    const checkedCategories = Array.from(checkBoxes)
        .filter((check) => check.checked)
        .map((check) => check.id);

    // loop over products and check for matches
    productElements.forEach((productElement, index) => {
        const product = products[index];

        // match the searched or selected item
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);

        const isInCheckedCategory =
            checkedCategories.length === 0 ||
            checkedCategories.includes(product.category);

        //show or hide products based on matches
        if (matchesSearchTerm && isInCheckedCategory) {
            productElement.classList.remove('hidden');
        } else {
            productElement.classList.add('hidden');
        }
    })
};

searchInput.addEventListener("input", filterProducts);
filters.addEventListener("change", filterProducts);


// initialise product elements
const productElements = [];

// loops over products and create element
products.forEach((product) => {
    const productElement = createProductElement(product);
    productElements.push(productElement);
    productsWrapper.appendChild(productElement);
});

