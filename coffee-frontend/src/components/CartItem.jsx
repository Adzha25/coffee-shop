import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div>
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">Rp {item.price.toLocaleString()}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-600 hover:underline"
      >
        Hapus
      </button>
    </div>
  );
};

export default CartItem;
