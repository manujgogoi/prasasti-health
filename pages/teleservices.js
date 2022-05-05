import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teleservices = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <div className="container mx-auto bg-white pl-5 pr-5">
        <h2 className="text-4xl font-thin pt-10 pb-5">
          Prasasti Tele Services &amp; Medicine (Online)
        </h2>
        <p className="text-xl font-light mb-10">
          One can avail online Services for Consultation only. Those patients
          who are stayed outside of Guwahati can call (Audio-Video) to our
          doctors at pre-appointed time. Call or Whatsapp to{" "}
          <span className="font-semibold">9127276699</span> for details.
        </p>
        <p className="text-xl font-light pb-10">
          Provider of Ayurvedic and Herbal Medicines. For medicines online
          services is there. Whatsapp to{" "}
          <span className="font-semibold">9127276699</span> for online purchase
          of Medicines or mail to prasastiayurveda@yahoo.in
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default teleservices;
