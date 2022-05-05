import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const services = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <main className="container mx-auto bg-white p-5 pt-16 pb-16 opacity-90">
        <div>
          <p className="text-lg">
            Situated at the heart of the Guwahati city,{" "}
            <span className="text-green-600 font-semibold">
              Prasasti Healthcare
            </span>{" "}
            is a noble endeavour to make people aware of the benefits of Herbal
            Medicines and Herbal food suppliments. Prasasti Healthcare is guided
            with the motto of{" "}
            <span className="text-green-600 font-semibold">
              &quot;Healthy Diet, Healthy Body, Healthy Family, Healthy
              Nation&quot;.
            </span>{" "}
            So far, Prasasti Healthcare has been able to gain appreciation from
            its valued well-wishers. This appreciation has resulted in extending
            its services in the field of healthcare sector in the form of five
            main services namely:
          </p>
        </div>
        <div>
          <ul className="text-lg list-disc pl-10">
            <li className="text-green-600 font-semibold cursor-pointer hover:underline hover:decoration-2">
              <Link href="/ayurveda">Prasasti Ayurveda</Link>
            </li>
            <li className="text-green-600 font-semibold cursor-pointer hover:underline hover:decoration-2">
              Prasasti Institute of Indian System of Medicine
            </li>
            <li className="text-green-600 font-semibold cursor-pointer hover:underline hover:decoration-2">
              Prasasti Yogalaya
            </li>
            <li className="text-green-600 font-semibold cursor-pointer hover:underline hover:decoration-2">
              Prasasti Healthcare
            </li>
            <li className="text-green-600 font-semibold cursor-pointer hover:underline hover:decoration-2">
              Prasasti Teleservices and Medicines(Online)
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default services;
