import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-teal-700 p-5 grid grid-cols-2">
        <div className=" flex align-middle justify-start">
          <p className="text-gray-300">
            Get connected with us on social networks:
          </p>
        </div>
        <div className="">
          <ul className="flex gap-3 flex-wrap justify-end">
            <li>
              <Link href="https://twitter.com/prasastihealth">
                <a>
                  <svg
                    fill="#ddd"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="25px"
                    height="25px"
                  >
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/Prasasti-Health-Group-1235327416489427/">
                <a>
                  <svg
                    fill="#ddd"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="25px"
                    height="25px"
                  >
                    {" "}
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-teal-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <div className="text-gray-400">
            <div>
              <Image
                alt="Prasasti Logo"
                src="/images/Logo.png"
                width={80}
                height={80}
              />
            </div>
            <div>
              <p>
                <span className="text-3xl">Prasasti</span>{" "}
                <span className="text-2xl">Healthcare</span>
              </p>
            </div>
            <div>
              <p className="italic">
                Healthy Diet, Healthy Body, Healthy Family, Healthy Nation.
              </p>
            </div>
          </div>

          <div className="pt-5 text-gray-400 grid grid-cols-2 pb-5">
            <div className="text-xl font-semibold pb-5 col-span-2">Links</div>
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/services">Services</Link>
            </div>
            <div>
              <Link href="/activities">Activities</Link>
            </div>
            <div>
              <Link href="/photos">Photos</Link>
            </div>
            <div>
              <Link href="/contact">Contact us</Link>
            </div>
            <div>
              <Link href="/downloads">Brochures</Link>
            </div>
            <div>
              <Link href="/ayurveda">Ayurveda</Link>
            </div>
            <div>
              <Link href="/institute">Institute</Link>
            </div>
            <div>
              <Link href="/yogalaya">Yogalaya</Link>
            </div>
            <div>
              <Link href="/healthcare">Healthcare</Link>
            </div>
            <div>
              <Link href="/teleservices">Teleservices</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal-900 text-center p-3">
        <p>&copy;2022 Copyright: prasastihealth.in</p>
      </div>
      {/* <div className='grid grid-cols-3'>
          <div className='col-span-2'>
            <h4 className='text-xl font-semibold'>Links</h4>
            <div className='grid grid-cols-2'>
              <div>Home</div>
              <div>Services</div>
              <div>Activities</div>
              <div>Photos</div>
              <div>Contact us</div>
              <div>Brochures</div>
              <div>Ayurveda</div>
              <div>Institute</div>
              <div>Yogalaya</div>
              <div>Healthcare</div>
              <div>Teleservices</div>
            </div>
          </div>
          <div>
            <div>
              <Image alt='Prasasti Logo' src='/images/Logo.png' width={80} height={80}/>
            </div>
            <div><p><span className='text-3xl'>Prasasti</span> <span className='text-2xl'>Healthcare</span></p></div>
            <div><p className='italic'>Healthy Diet, Healthy Body, Healthy Family, Healthy Nation.</p></div>
          </div>
        </div> */}
      <div className="text-center"></div>
    </div>
  );
};

export default Footer;
