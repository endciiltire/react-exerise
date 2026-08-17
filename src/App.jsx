import { useCart } from "./exercise-16/CartContext";

function App() {
  const products = [
    {
      id: 1,
      name: "Widget",
      price: 19.99,
    },
    {
      id: 2,
      name: "Gadget",
      price: 29.99,
    },
  ];

  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      {/* Products */}
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>Price: ${product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      {/* Cart */}
      <h1>Cart Summary</h1>

      <p>Total Items: {cart.length}</p>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;