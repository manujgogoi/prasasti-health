import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const healthcare = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <main className="container mx-auto bg-white p-5 pb-10">
        <h2 className="text-4xl font-thin pt-5 pb-5">Prasasti Healthcare</h2>
        <p className="text-lg font-light text-justify">
          <span className="font-semibold">Prasasti Healthcare</span>,
          established in Assam in the year 2012. Later as an{" "}
          <span className="font-semibold">
            Institute of Alternative treatment system
          </span>{" "}
          it was registered in the year 2014 as{" "}
          <span className="font-semibold">
            PRASASTI INSTITUTE OF INDIAN SYSTEM OF MEDICINE(PIISM)
          </span>{" "}
          under which <span className="font-semibold">Prasasti Ayurveda</span>{" "}
          and <span className="font-semibold">Yogalaya</span> actively giving
          their services in this field. Apart from{" "}
          <span className="font-semibold">Doctor’s advice, Medicines</span>
          and <span className="font-semibold">counselling</span> different{" "}
          <span className="font-semibold">Physical Therapies</span> which are
          based on traditional Indian System applied here as treatment.{" "}
          <span className="font-semibold">
            Chronic care, Critical Care, Cancer Care
          </span>{" "}
          are some vital field on which prasasti focus in. Pain care is another
          field where treatment done on the base of Ayurvedic system and
          therapies.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default healthcare;
