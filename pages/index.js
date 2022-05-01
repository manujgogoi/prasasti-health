import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='main-container pt-20'>
      <div className='container bg-green-100 mx-auto p-5 rounded-t-lg'>
        <div className='flex items-center'>
          <div className='flex-none w-28'>
            <Image alt='Prasasti Logo' layout='fixed' src='/images/Logo.png' width={100} height={100} />
          </div>
          <div className="flex-1"><span className='text-6xl'>Prasasti</span> &nbsp; <span className='text-3xl'>Healthcare</span></div>
          <div className="flex-none flex flex-col">
            <div className="flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
</svg> View Brochures (PDFs)</div>
            <div className="flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
</svg> Book an appointment</div>
          </div>
        </div>      
      </div>
      <div className='container mx-auto'>
        <nav className='bg-green-600 h-10 text-white text-xl'>
          <ul className='flex gap-5 divide-x-2 pt-1'>
            <li className='text-center pl-6'>Home</li>
            <li className='text-center pl-6'>Services</li>
            <li className='text-center pl-6'>Activities</li>
            <li className='text-center pl-6'>Photos</li>
            <li className='text-center pl-6'>Contact Us</li>
          </ul>
        </nav>
      </div>
      <div className='container mx-auto relative overflow-hidden'>
        <Image alt="Prasasti Banner" src="/images/banner.jpg" layout='responsive' width={1200} height={400}/>
      </div>
      <div className='container mx-auto bg-green-100 bg-opacity-75'>
        <div className='grid grid-cols-5 justify-items-center pt-10 pb-10'>
          <div className='flex flex-col items-center'>
            <div>
              <Image alt="Ayurveda Logo" src="/images/circle.png" width={100} height={100} />
            </div>
            <div><p className=''>Prasasti Ayurveda</p></div>
          </div>
          <div className='flex flex-col items-center'>
            <div>
              <Image alt="Ayurveda Institute Logo" src="/images/circleAyurveda.png" width={100} height={100} />
            </div>
            <div><p className=''>Prasasti Institute of Indian System of Medicine</p></div>
          </div>
          <div className='flex flex-col items-center'>
            <div>
              <Image alt="Yogalaya Logo" src="/images/circleYoga.png" width={100} height={100} />
            </div>
            <div><p className=''>Prasasti Yogalaya</p></div>
          </div>
          <div className='flex flex-col items-center'>
            <div>
              <Image alt="Prasasti Health Logo" src="/images/circleHealth.png" width={100} height={100} />
            </div>
            <div><p className=''>Prasasti Healthcare</p></div>
          </div>
          <div className='flex flex-col items-center'>
            <div>
              <Image alt="Teleservice Logo" src="/images/circleTeleservice.png" width={100} height={100} />
            </div>
            <div><p className=''>Prasasti Teleservices &amp; Medicines (online)</p></div>
          </div>
        </div>
      </div>
      <div className='container bg-teal-900 mx-auto text-gray-400 p-5'>
        <div className='grid grid-cols-3'>
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
        </div>
        <div className='text-center'><p>&copy;2022 Copyright: prasastihealth.in</p></div>

      </div>
    </div>
  )
}
