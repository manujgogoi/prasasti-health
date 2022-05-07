import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const downloads = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <main className="container mx-auto bg-white opacity-90 p-5">
        <h2 className="text-4xl font-thin pt-5 pb-10">Brochures</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-xl font-light pb-10">
          <Link href="/pdf/brochures/ayurveda_brochure.pdf">
            <a
              target="_blank"
              className="border-green-400 border-l-8 p-2 bg-gradient-to-r from-green-300"
            >
              <li>Ayurveda (PDF)</li>
            </a>
          </Link>
          <Link href="/pdf/brochures/healthcare_brochure.pdf">
            <a
              target="_blank"
              className="border-green-400 border-l-8 p-2 bg-gradient-to-r from-green-300"
            >
              <li>Healthcare (PDF)</li>
            </a>
          </Link>
          <Link href="/pdf/brochures/leaflet_silpukhuri.pdf">
            <a
              target="_blank"
              className="border-green-400 border-l-8 p-2 bg-gradient-to-r from-green-300"
            >
              <li>Ayurveda Leaflet (PDF)</li>
            </a>
          </Link>
          <Link href="/pdf/brochures/PIISM.pdf">
            <a
              target="_blank"
              className="border-green-400 border-l-8 p-2 bg-gradient-to-r from-green-300"
            >
              <li>PIISM Front (PDF)</li>
            </a>
          </Link>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default downloads;
