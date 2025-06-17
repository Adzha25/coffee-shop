import { useCart } from "../context/CartContext";

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
      <img src={item.image} alt={item.name} className="rounded-t-lg w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">Rp {item.price.toLocaleString()}</p>
        <button
          className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
          onClick={() => addToCart(item)}
        >
          Tambah
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
