const ProductList = ({ data }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-4 bg-white shadow hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600 mb-2">Rp {item.price.toLocaleString()}</p>
          <button
            onClick={() => addToCart(item)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 rounded"
          >
            Tambah
          </button>
        </div>
      ))}
    </div>
  );
};
