import { useState } from "react";

function Shopp() {
 
  const [cart, setCart] = useState([]);


  const [productName, setProductName] = useState("");

  const [price, setPrice] = useState("");

  // Add Product
  const handleAddToCart = () => {
    if (productName === "" || price === "") {
      alert("Please enter product name and price");
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(),
      name: productName,
      price: Number(price),
      quantity: 1,
    };

    setCart([...cart, newProduct]);

    setProductName("");
    setPrice("");
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

 
  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

 
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h1>Simple Shopping Cart</h1>

      <h2>Add a Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>

      {cart.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <>
          <h2>Products in Cart</h2>

          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - $
                {product.price.toFixed(2)}

                <br />

                Quantity:

                <button onClick={() => decreaseQuantity(product.id)}>
                  -
                </button>

                <span> {product.quantity} </span>

                <button onClick={() => increaseQuantity(product.id)}>
                  +
                </button>

                <br />

                <button onClick={() => removeProduct(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default Shopp;