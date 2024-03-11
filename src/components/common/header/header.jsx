import logo from '../../images/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <nav className=" max-w-screen-xl mx-auto" >
      <header className=' flex  items-center justify-between'>
        <div className=' flex items-center'>
        <img className='w-24 h-24 object-cover filter brightness-110 contrast-125 saturate-125 transition duration-300 hover:brightness-150 hover:contrast-150 hover:saturate-150' src={logo} alt="Logo" />
        {/* <span className="font-bold text-lg ">StayEase</span> */}
        </div>
        <div className='flex items-center border px-2 py-2 shadow-md shadow-slate-300 rounded-3xl'>
          <div className='px-2 py-2 text-black'>AnyWhere</div>
          <div className='border h-8'></div>
          <div className='px-2 py-2 text-black'>Any Week</div>
          <div className='border h-8'></div>
          <div className='px-2 py-2 text-gray-500'>Any Guests</div>
          <div className=" flex items-center"><button className=" rounded-full item-centre text-white p-2 bg-red-500"><IoSearch /></button></div>
        </div>
        <Link to={'/login'} className='flex  items-center border px-3 py-3  gap-2 rounded-3xl'>
        <div className='text-gray-500 '><FaBars size={20} /></div>
        <div className='bg-slate-500 text-white rounded-full'><CgProfile size={23}  /></div>
        </Link>
        
      </header>
        
      
    </nav>

    )
}
