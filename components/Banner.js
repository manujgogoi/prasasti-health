import Image from "next/image"

const Banner = () => {
  return (
    <div className='container mx-auto relative overflow-hidden'>
    <Image alt="Prasasti Banner" src="/images/banner.jpg" layout='responsive' width={1200} height={400}/>
  </div>
  )
}

export default Banner