import { AiFillHeart } from "react-icons/ai";

const User = () => {
  return (
    <div className='User'>
      <h2 className='text-center pt-10 text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        deleniti!x
      </h2>
      <div className='container_user  flex justify-center items-center mt-10 flex-col gap-10 relative md:flex-row md:gap-1'>
        <div className='user_only'>
          <img src='/images/girl.png' alt='' />
          <div>
            <h1>Melisa</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            </p>
          </div>
        </div>
        <div className='user_only'>
          <img src='/images/man.png' alt='' />
          <div>
            <h1>Jonh</h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            </p>
          </div>
        </div>
        <button className='text-7xl absolute hidden  text-pink-500 md:block'>
          <AiFillHeart />
        </button>
      </div>
      <div className='caption text-center '>
        <h2 className=' font-sacra text-5xl  py-12 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sint.
        </h2>
      </div>
    </div>
  );
};

export default User;
