import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container bg-green-200 mx-auto p-5 rounded-t-lg">
      <div className="flex flex-wrap items-center">
        {/* Brand */}
        <div className="flex-none w-20 md:w-24 mr-2">
          <Image
            alt="Prasasti Logo"
            layout="responsive"
            src="/images/Logo.png"
            width={100}
            height={100}
          />
        </div>
        {/* Main Title */}
        <div className="flex-1">
          <span className="text-4xl md:text-6xl">Prasasti</span> &nbsp;{" "}
          <span className="text-xl md:text-3xl">Healthcare</span>
        </div>
        {/* Header Right section */}
        <div className="flex-none mt-5 md:mt-0 flex flex-col">
          <div className="flex flex-row items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-orange-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <Link href="/downloads">
              <span className="ml-1">View Brochures (PDFs)</span>
            </Link>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-orange-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="/appointment">
              <span className="ml-1">Book an appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
