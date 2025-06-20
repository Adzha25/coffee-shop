import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const total = totalPrice;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Keranjang Belanja</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Keranjang kamu kosong.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={handleRemove} />
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-xl font-semibold">
              Total: Rp {total.toLocaleString()}
            </p>
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition"
            >
              Lanjut ke Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
