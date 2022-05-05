import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ayurveda = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <main className="container mx-auto bg-white opacity-90 pt-10 pb-16"></main>
      <Footer />
    </div>
  );
};

export default ayurveda;
