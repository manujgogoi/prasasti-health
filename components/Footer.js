import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
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
  )
}

export default Footer