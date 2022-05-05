import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const activities = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <main className="container mx-auto bg-white opacity-90 pl-5 pr-5 pt-16 pb-10 text-lg">
        <p className="mb-5">
          <span className="text-green-600 font-semibold">
            Prasasti Healthcare
          </span>
          , being devoted to the principle of Healthy living and promotion of
          Herbal Medicines, its activities may be briefly enumerated as under:
        </p>
        <ul className="ml-1 space-y-3">
          <li className="border-l-4 border-green-600 pl-3">
            Research on local herbs &amp; making people aware of their medicinal
            properties through development of products.
          </li>
          <li className="border-l-4 border-green-600 pl-3">
            Imparting regular discourses on the benefits of Indian System of
            Medicine such as Ayurveda, Naturopathy, Unani &amp; Siddha.
          </li>
          <li className="border-l-4 border-green-600 pl-3">
            Seminars on common health problems such as diabetes, high blood
            pressure, etc. and their ayurvedic treatment.
          </li>
          <li className="border-l-4 border-green-600 pl-3">
            Lecture sessions on the benefits of Yoga, Pranayama &amp; Meditation
            by renowned yogacharjyas.
          </li>
          <li className="border-l-4 border-green-600 pl-3">
            Activly participated in Arogya Mela, held at Guwahati in 2015 under
            Ministry of Ayush.
          </li>
          <li className="border-l-4 border-green-600 pl-3">
            Observance of World Yoga Day ever since its introduction by the
            Govt. of India.
          </li>
          <li className="border-l-4 border-green-600 pl-3">
            Conducts special yoga sessions for students with focus on increasing
            concentration power, memory and emotional stability.
          </li>
          <li className="border-l-4 border-green-600 pl-3">
            Prescription of diet, excercises, etc. necessary for a positive
            life.
          </li>
          <li className="border-l-4 border-green-600 pl-3">
            Addressing Environmental issues and their impact on human health,
            etc.
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default activities;
