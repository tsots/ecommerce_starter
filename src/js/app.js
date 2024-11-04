console.log('Are we there')

// SELECT ELEMENTS
const productsEl = document.querySelector(".products");
//const cartItemsEl = document.querySelector(".cart-items");
//const subtotalEl = document.querySelector(".subtotal");
//const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// RENDER PRODUCTS
function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                        <p>
                            ${product.description}
                        </p>
                    </div>
                </div>
            </div>
        `;
  });
}
renderProdcuts();
