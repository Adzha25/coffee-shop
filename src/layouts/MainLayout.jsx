import Navbar from "../components/Navbar";

const MainLayout = ({ children, noPadding = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`${noPadding ? "" : "pt-10 px-4"} flex-1`}>{children}</main>
    </div>
  );
};

export default MainLayout;
