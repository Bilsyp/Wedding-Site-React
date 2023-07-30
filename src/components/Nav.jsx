import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
const Nav = () => {
  const listcontainer = useRef(null);
  const [toogle, setToogle] = useState(false);
  const handleClick = () => {
    const check = listcontainer.current.getAttribute("data-option");
    const container = listcontainer.current;

    if (check == "right") {
      setToogle(true);
      container.setAttribute("data-option", "left");
    } else {
      setToogle(false);
      container.setAttribute("data-option", "right");
    }
  };
  return (
    <nav className='  sticky top-0  text-white px-3 py-6 flex justify-between items-center backdrop-blur z-10'>
      <div className='brand'>
        <h2 className=' text-5xl font-sacra font-semibold'>Dinos</h2>
      </div>
      <ul
        className={`List_Item ${toogle ? "show" : ""} flex text-2xl gap-8 px-7`}
        ref={listcontainer}
        data-option='right'
      >
        <li>Home</li>
        <li>About</li>
        <li>Resepsi</li>
        <li>Info</li>
      </ul>
      <button
        onClick={handleClick}
        className=' text-gray-400 text-3xl sm:hidden'
      >
        {toogle ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Nav;
