window.addEventListener("DOMContentLoaded", (event) => {

      const button = document.getElementById("add-to-cart")

      button.addEventListener("click", (event) => {     //   when user clicks on 'Add to Cart' button


      const item = document.getElementById("items").value          // at the click we retrieved these values
      const quantity = document.getElementById("quantity").value

      localStorage.setItem(item, quantity)




    showCart()
  })




    const showCart = () => {
      const shoppingCart = document.getElementById("shopping-cart") // get id of shopping cart

      for (let i = 0; localStorage.length; i++) { // iterate thru local storage to get access to clicked values.
        const key = localStorage.key(i)  // assigning local storage at index i...item variable
        console.log(key)
        const value = localStorage.getItem(key)
        console.log(value);
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${key}:${value}`
        

      }

    };


    const removeItem = () => {

    };

  });
