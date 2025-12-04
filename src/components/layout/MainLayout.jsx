// src/components/layout/Layout.jsx
import Footer from "../sections/Footer";
import Header from "../sections/Header";



const MainLayout = ({ children }) => {
  return (
    <div className="font-sans text-gray-800 space-y-40">
      <Header />
      <main className="max-w-7xl mx-auto space-y-40 pt-26">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
