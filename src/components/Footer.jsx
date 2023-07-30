import { FaClock } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className='footer-container  p-10    bg-black text-center'>
      <div className='footer-content'>
        <div className='footer-head text-center text-gray-100'>
          <h1 className='font-sacra text-7xl py-6 font-bold text-pink-500'>
            Event Information
          </h1>
          <h2 className='text-xl py-3 font-semibold font-poppis pb-8'>
            Jl. Ciliwung No.4, Cihapit, Kec. Bandung Wetan, Kota Bandung
          </h2>
          <a
            href='https://goo.gl/maps/p2fBT5dNqmd3zhNN8'
            className='bg-pink-500   py-2 px-10 rounded-xl  font-semibold cursor-pointer'
          >
            Click to open map
          </a>
          <p className='py-7 max-w-xl mx-auto'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            consequatur, ad aut iusto rem explicabo tempore distinctio sed
            beatae odit molestias corrupti? Facilis, cum quas!
          </p>
        </div>

        <div className='grid grid-cols-1 mt-5 md:grid-cols-2  gap-8  text-gray-100'>
          <div className=' bg-gray-500  rounded-xl'>
            <h2 className='text-2xl py-2'>AKAD NIKAH</h2>
            <hr />
            <div className='flex justify-center items-center py-3 text-center gap-9  text-xl mt-7 md:text-1xl lg:text-md'>
              <div className='flex justify-center items-center gap-3 flex-col'>
                <span>
                  <FaClock />
                </span>
                <p>10.00 - 12.00</p>
              </div>
              <div className='flex justify-center items-center flex-col gap-3'>
                <span>
                  <BsFillCalendarDateFill />
                </span>
                <p>9 November , 2023</p>
              </div>
            </div>
            <hr />
            <div className='captions py-3'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
                nostrum.
              </p>
            </div>
          </div>
          <div className=' bg-gray-500  rounded-xl'>
            <h2 className='text-2xl py-2'>RESEPSI NIKAH</h2>
            <hr />
            <div className='flex justify-center items-center py-3 text-center gap-9  text-xl mt-7 md:text-1xl lg:text-md'>
              <div className='flex justify-center items-center gap-3 flex-col'>
                <span>
                  <FaClock />
                </span>
                <p>10.00 - 12.00</p>
              </div>
              <div className='flex justify-center items-center flex-col gap-3'>
                <span>
                  <BsFillCalendarDateFill />
                </span>
                <p>10 November , 2023</p>
              </div>
            </div>
            <hr />
            <div className='captions py-3'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
                nostrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
