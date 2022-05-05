import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function Home() {
  return (
    // Website wrapper
    <div className="main-container pt-20">
      {/* Head Section */}
      <Head>
        <title>Prasasti Health - Home</title>
        <meta
          name="description"
          content="Prasasti Healthcare, established in Assam in the year 2012. Later as an Institute of Alternative treatment system it was registered in the year 2014 as PRASASTI INSTITUTE OF INDIAN SYSTEM OF MEDICINE(PIISM) under which Prasasti Ayurveda and Yogalaya actively giving their services in this field."
        />
        <meta property="og:title" content="Prasasti Health - Home" />
        <meta
          property="og:description"
          content="Prasasti Healthcare, established in Assam in the year 2012. Later as an Institute of Alternative treatment system it was registered in the year 2014 as PRASASTI INSTITUTE OF INDIAN SYSTEM OF MEDICINE(PIISM) under which Prasasti Ayurveda and Yogalaya actively giving their services in this field."
        />
        <meta property="og:url" content="https://prasastihealth.in/" />
        <meta property="og:type" content="website"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Banner />
      <div className="container mx-auto bg-green-100 bg-opacity-75">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center pt-10 pb-10 font-semibold">
          <div className="flex flex-col items-center cursor-pointer">
            <div>
              <Link href="/ayurveda">
                <a>
                  <Image
                    alt="Ayurveda Logo"
                    src="/images/circle.png"
                    width={100}
                    height={100}
                  />
                </a>
              </Link>
            </div>
            <div>
              <p className="">Prasasti Ayurveda</p>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <div>
              <Image
                alt="Ayurveda Institute Logo"
                src="/images/circleAyurveda.png"
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className="">
                Prasasti Institute of Indian System of Medicine
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <div>
              <Image
                alt="Yogalaya Logo"
                src="/images/circleYoga.png"
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className="">Prasasti Yogalaya</p>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <div>
              <Image
                alt="Prasasti Health Logo"
                src="/images/circleHealth.png"
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className="">Prasasti Healthcare</p>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <div>
              <Link href="/teleservices">
                <a>
                  <Image
                    alt="Teleservice Logo"
                    src="/images/circleTeleservice.png"
                    width={100}
                    height={100}
                  />
                </a>
              </Link>
            </div>
            <div>
              <p className="pl-5 md:pl-0">
                Prasasti Teleservices &amp; Medicines (online)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
