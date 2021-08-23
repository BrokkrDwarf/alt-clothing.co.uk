/*SHOPPING CART*/

let carts = document.querySelectorAll('.basket');

let products = [
  {
    name: 'be the change T-shirt',
    tag: 'be-the-change-t-shirt-1',
    price: 20,
    inCart: 0
  },
  {
    name: 'be the change Hoodie',
    tag: 'be-the-change-hoodie-1',
    price: 40,
    inCart: 0
  },
  {
    name: 'be the change Hoodie 3',
    tag: 'be-the-change-hoodie-3',
    price: 40,
    inCart: 0
  },
  {
    name: 'alt t-shirt black',
    tag: 'alt-t-shirt-1',
    price: 20,
    inCart: 0
  }
];

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click',() => {
      cartNumbers(products[i]);
      totalCost(products[i])
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
      document.querySelector('.shopping span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
let productNumbers = localStorage.getItem('cartNumbers');

productNumbers = parseInt(productNumbers);

if( productNumbers ) {
  localStorage.setItem('cartNumbers', productNumbers + 1);
  document.querySelector('.shopping span').textContent = productNumbers + 1;
} else {
  localStorage.setItem('cartNumbers', 1);
  document.querySelector('.shopping span').textContent = 1;
}

setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems)

  if(cartItems != null) {
      if(cartItems[product.tag] == undefined) {
          cartItems = {
              ...cartItems,
              [product.tag]: product
          }
      }
     cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
         [product.tag]: product
      }
  }

  localStorage.setItem("productsInCart", JSON.stringify 
  (cartItems));
}

function totalCost(product) {
 let cartCost = localStorage.getItem('totalCost');

 console.log("my cartCost is", cartCost);
 console.log(typeof cartCost );
  
 if(cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price);
 } else {
      localStorage.setItem("totalCost", product.price);
 }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartContainer = document.querySelector(".cart-products");
  let cartCost = localStorage.getItem('totalCost');

  console.log(cartItems);
  if( cartItems && cartContainer ) {
      cartContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        cartContainer.innerHTML += `
        <div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="./images/${item.tag}.png" width=100px height=100px>
            <span>${item.name}</span>
        </div>
        <div class="price1">£${item.price},00</div>
        <div class="quantity1">
          <ion-icon name="caret-back-circle"></ion-icon>
          <span>${item.inCart}</span>
          <ion-icon name="caret-forward-circle"></ion-icon>
        </div>
        <div class="total1">
        £${item.inCart * item.price},00
        </div>
        `;
      });

      cartContainer.innerHTML += `
       <div class="basketTotalContainer">
           <h4 class="basketTotalTitle">
               Cart Total
           </h4>
           <h4 class="basketTotal">
             £${cartCost},00
             </h4>
      `;
  }
}

onLoadCartNumbers();
displayCart()

  // SHOPPING CART PLUS OR MINUS
  $('ion-icon.caret-back-circle').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    
    if (value > 1) {
      value = value - 1;
    } else {
      value = 0;
    }
    
    $input.val(value);
        
  });

  $('ion-icon.caret-forward-circle').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
    value = value + 1;
    } else {
      value =100;
    }

    $input.val(value);
  });