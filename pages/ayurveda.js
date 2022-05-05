import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const ayurveda = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <main className="container mx-auto bg-white opacity-90 pt-10 pb-16 pl-5 pr-5">
        <h2 className="text-4xl font-thin mb-5 flex gap-3">
          <Image
            alt="Prasasti Ayurveda Logo"
            src="/images/circle.png"
            layout="fixed"
            width={50}
            height={50}
          />
          Prasasti Ayurveda
        </h2>
        <div className="mb-10">
          <p className="text-xl font-light text-justify">
            Ayurveda has been the traditional Indian system of curing diseases
            since time immemorial. With the advent of Allopathy, this
            traditional system of treatment declined in importance for quite
            sometime. But, now as people are becoming aware of the facet that
            Ayurveda, besides curing diseases effectively, also produces
            side-benefits but no side-effects, this ancient system is gradually
            regaining its lost glory.{" "}
            <span className="text-green-600 font-semibold">
              Prasanti Ayurveda
            </span>{" "}
            seeks to popularize this ancient system of curing health related
            problems among the people of Guwahati and NorthEast. It has gained
            rich benefits for its endeavour. The hygienic and homely ambience
            coupled with the infrastructural facilities have been able to gain
            good response from its well wishers and visitors. The Therapy
            sessions are conducted professionally. Moreover, one can consult our
            Medical Officer,{" "}
            <span className="italic font-semibold">
              Dr. Sangeeta Misra, B.A.M.S.
            </span>
            , regarding the ayurvedic cure of diseases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h3 className="text-2xl text-green-600 mb-5">
              Our Special Care includes:
            </h3>
            <ul className="text-xl font-light bg-green-700 text-white p-5">
              <li>Traditional Indian Massage</li>
              <li>Steam Bath</li>
              <li>Herbal Bath</li>
              <li>Physical Fitness Training</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl text-green-600 mb-5 mt-10 md:mt-0">
              One can also consult us regarding:
            </h3>
            <ul className="grid grid-cols-2 lg:grid-cols-3 text-xl font-light bg-green-700 text-white p-5">
              <li>Diabetes</li>
              <li>Arthritis</li>
              <li>Joint Pain</li>
              <li>Back Pain</li>
              <li>Spinal Problem</li>
              <li>Stomach Problem</li>
              <li>Hypertension</li>
              <li>Neuro Problem</li>
              <li>Liver Problem</li>
              <li>Gastritis</li>
              <li>Constipation</li>
              <li>Skin Problem</li>
              <li>Tuberculosis</li>
              <li>Cancer</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xl font-thin">
          <p>Service Hours: 9AM-7PM (Monday - Saturday)</p>
          <p>
            <i>(Appointments can be fixed on Sundays in special cases)</i>
          </p>
          <p>Doctor Consultation Time:</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ayurveda;
