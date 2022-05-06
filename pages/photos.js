import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCard from "../components/ImageCard";

const photos = () => {
  return (
    <div className="main-container pt-20">
      <Header />
      <Navbar />
      <main className="container mx-auto bg-white overflow-hidden">
        <h2 className="text-4xl font-thin pl-5 pr-5 pt-10 pb-10">
          Photo Gallery
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 bg-gray-200 p-5">
          <ImageCard
            title="1st International Yoga Day Celebration"
            alt="1st international Yoga Day celebration photo"
            src="/images/appreciation/yoga_day_celeb.jpg"
          />
          <ImageCard
            title="2nd International Yoga Day Celebration"
            alt="2nd international Yoga Day celebration photo"
            src="/images/appreciation/2nd_international_yoga_day.jpg"
          />
          <ImageCard
            title="Appreciation of participation on 2nd International Yoga
            Day Celebration"
            alt="Appreciation of participation on 2nd international Yoga Day"
            src="/images/appreciation/APPRICIATION_OF_PARTICIPATION _agvb_4.jpg"
          />
          <ImageCard
            title="Appreciation of participation at Arya Hospital"
            alt="Appreciation of participation at Arya Hospital"
            src="/images/appreciation/APPRICIATION_OF_PARTICIPATION_Arya_Hospital_3.jpg"
          />
          <ImageCard
            title="Appreciation of participation to Dr Janardan Bezbaruah"
            alt="Appreciation of participation to Dr Janardan Bezbaruah"
            src="/images/appreciation/APPRICIATION_OF_PARTICIPATION_Dr_Janardan_Bezbaruah_2.jpg"
          />
          <ImageCard
            title="Appreciation of participation at Maharshi Vidya Mandir"
            alt="Appreciation of participation at Maharshi Vidya Mandir"
            src="/images/appreciation/APPRICIATION_OF_PARTICIPATION_Maharshi_Vidya_mandir_1.jpg"
          />
          <ImageCard
            title="Diabetes Day Celebration"
            alt="Diabetes Day Celebration"
            src="/images/diabetesDay/Diabetes_day_celebration_4.jpg"
          />
          <ImageCard
            title="In Diabetes Day Seminar"
            alt="In Diabetes Day Seminar"
            src="/images/diabetesDay/In_diabetes_day_seminar_3.jpg"
          />
          <ImageCard
            title="Leg Massage for relaxation"
            alt="Leg Massage for relaxation"
            src="/images/diabetesDay/Leg_Massage_for_relaxation_2.jpg"
          />
          <ImageCard
            title="Participation at Arogya Mela"
            alt="Participation at Arogya Mela"
            src="/images/diabetesDay/Participation_at_Arogya_Mela_1.jpg"
          />

          <ImageCard
            title="Souvenor on 2nd International Yoga Day"
            alt="Souvenor on 2nd International Yoga Day"
            src="/images/yogaDay/souvenor_on_2nd_International_yoga_day_1.jpg"
          />

          <ImageCard
            title="Souvenor on 2nd International Yoga Day 2"
            alt="Souvenor on 2nd International Yoga Day 2"
            src="/images/yogaDay/souvenor_on_2nd_International_yoga_day_2.jpg"
          />
          <ImageCard
            title="Souvenor on 2nd International Yoda Day 3"
            alt="Souvenor on 2nd International Yoda Day 3"
            src="/images/yogaDay/souvenor_on_2nd_International_yoga_day_3.jpg"
          />
          <ImageCard
            title="Souvenor on 2nd International Yoda Day"
            alt="Souvenor on 2nd International Yoda Day"
            src="/images/yogaDay/souvenor_on_yoga_day.jpg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default photos;
