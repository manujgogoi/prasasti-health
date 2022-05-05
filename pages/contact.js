import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const contact = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <main className="container mx-auto bg-white opacity-90 pt-10 pb-16">
        <h2 className="text-4xl font-thin ml-6">Contact us</h2>
        <div className="flex flex-wrap justify-center">
          <Card
            title="Prasasti Ayurveda"
            address="House No 10, U.N. Bezbaruah Path, G.N.B. Road, Silpukhuri,
              Guwahati-03"
            phone="9207015089, 8486026122"
            email="prasastihealth@yahoo.in"
            website="www.prasastihealth.in"
          />
          <Card
            title="Prasasti Institute of Indian System of Medicine"
            address="House No 126, Rajgarh Road, Guwahati-07"
            phone="9207015089"
            email="prasastihealth@yahoo.in"
            website="www.prasastihealth.in"
          />
          <Card
            title="Prasasti Yogalaya"
            address="House No 10, U.N. Bezbaruah Path, G.N.B. Road, Silpukhuri,
              Guwahati-03"
            phone="9207015089, 8486026122"
            email="prasastihealth@yahoo.in"
            website="www.prasastihealth.in"
          />
          <Card
            title="Prasasti Tele Services and Medicine(Online)"
            whatsapp="9127276699"
            email="prasastihealth@yahoo.in"
            website="www.prasastihealth.in"
          />
          <Card
            title="Prasasti Healthcare"
            address="H.No.5, Sagarika Path, R.G. Baruah Road, Guwahati-24, Assam"
            phone="9207015089, 9127276699"
            email="prasastihealth@yahoo.in"
            website="www.prasastihealth.in"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default contact;
