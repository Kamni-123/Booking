import logo from '../../images/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import { useContext } from 'react';

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <nav className="max-w-screen-2xl mx-11">
            <header className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex items-center'>
                    <Link to="/">
                        <img className='w-24 h-24 object-cover filter brightness-110 contrast-125 saturate-125' src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className='flex items-center border p-10 mt-4 md:mt-0 md:border-1 md:px-2 md:py-0 md:shadow-xl md:shadow-slate-300 md:rounded-3xl'>
                    <div className='px-2 py-2 text-black'>AnyWhere</div>
                    <div className='border h-8'></div>
                    <div className='px-2 py-2 text-black'>Any Week</div>
                    <div className='border h-8'></div>
                    <div className='px-2 py-2 text-gray-500'>Any Guests</div>
                    <div className="flex items-center"><button className="rounded-full item-centre text-white p-2 bg-red-500"><IoSearch /></button></div>
                </div>
                <div className='flex justify-center items-center mt-4 md:mt-0'>
                    <Link to={user ? '/account' : '/login'} className='flex items-center border p-3 gap-2 rounded-3xl shadow-lg'>
                        <div className='text-gray-500'><FaBars size={20} /></div>
                        <div className='bg-slate-500 text-white rounded-full'><CgProfile size={23} /></div>
                        {!!user && (
                            <div>
                                {user.name}
                            </div>
                        )}
                    </Link>
                </div>
            </header>
        </nav>
    )
}


