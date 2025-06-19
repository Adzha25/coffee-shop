import { Coffee, CupSoda, Cookie } from "lucide-react";
import { coffeeMenu, nonCoffeeMenu, snackMenu } from "../data/menuData";
import MenuItemCard from "../components/MenuItemCard";

const Menu = () => {
  return (
    <section className="bg-gradient-to-br from-[#fdf6ec] via-[#f8e6cf] to-[#f5dbc3] py-16">
    <div className="px-4 max-w-6xl mx-auto">
      {/* Judul Halaman */}
      <h1 className="text-amber-700 text-3xl font-bold mb-8 text-center">Menu Kami</h1>

      {/* ===== Coffee Section ===== */}
      <section className="mb-10" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-2xl font-semibold mb-4 mt-6 flex items-center gap-2">
          <Coffee className="w-6 h-6 text-amber-700" />
          Coffee
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {coffeeMenu.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ===== Non-Coffee Section ===== */}
      <section className="mb-10" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-2xl font-semibold mb-4 mt-6 flex items-center gap-2">
          <CupSoda className="w-6 h-6 text-blue-500" />
          Minuman Non-Coffee
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {nonCoffeeMenu.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ===== Cemilan Section ===== */}
      <section className="mb-10" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-2xl font-semibold mb-4 mt-6 flex items-center gap-2">
          <Cookie className="w-6 h-6 text-yellow-600" />
          Cemilan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {snackMenu.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
    </section>
  );
};

export default Menu;
