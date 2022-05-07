import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const appointment = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <main className="container mx-auto bg-white opacity-90 p-5">
        <h2 className="text-4xl font-thin mt-5 mb-5">Book an Appointment</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-slate-200 text-center">
            <h3 className="text-2xl font-light pt-5 pb-5">
              For booking Appointments, please use:
            </h3>
            <ul className="flex flex-wrap md:flex-col gap-5 md:gap-20 items-center justify-around  p-5 text-white">
              <li className="flex flex-col items-center bg-teal-600 opacity-100 rounded-full pt-7 pb-7 pl-6 pr-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>{" "}
                Phone Call
              </li>
              <li className="flex flex-col items-center rounded-full bg-purple-700 pl-10 pr-10 pt-7 pb-7 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                SMS
              </li>
              <li className="flex flex-col items-center bg-orange-500 pl-10 pr-10 pt-7 pb-7 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                E-mail
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-slate-300 p-5">
              <h3 className="text-3xl font-thin">Prasasti Ayurveda</h3>
              <p className="text-xl font-light">
                Contact Nos: 9207015089, 8486026122,
              </p>
              <p className="text-xl font-light">
                E-mail: prasastiayurveda@yahoo.in
              </p>
            </div>
            <div className="bg-slate-300 p-5 mt-5">
              <h3 className="text-3xl font-thin">
                Prasasti Institue of Indian System of Medicine
              </h3>
              <p className="text-xl font-light">
                Contact Nos: 0361-2465534, 8486026122,
              </p>
              <p className="text-xl font-light">
                E-mail: prasastiiism@yahoo.in
              </p>
            </div>

            <div className="bg-slate-300 p-5 mt-5">
              <h3 className="text-3xl font-thin">Prasasti Yogalaya</h3>
              <p className="text-xl font-light">
                Contact Nos: 8486026122, 7578008211,
              </p>
              <p className="text-xl font-light">
                E-mail: prasastiyogalaya@yahoo.in
              </p>
            </div>

            <div className="bg-slate-300 p-5 mt-5">
              <h3 className="text-3xl font-thin">Prasasti Healthcare</h3>
              <p className="text-xl font-light">
                Contact Nos: 8486026122, 7578008211,
              </p>
              <p className="text-xl font-light">
                E-mail: prasastifitness@yahoo.in
              </p>
            </div>

            <div className="bg-slate-300 p-5 mt-5">
              <h3 className="text-3xl font-thin">
                Prasasti Tele Services and Medicines (Online Services)
              </h3>
              <p className="text-xl font-light">
                Contact Nos: 0361 2464277, 9864126197,
              </p>
              <p className="text-xl font-light">
                E-mail: prasastimedicine@yahoo.in
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default appointment;
