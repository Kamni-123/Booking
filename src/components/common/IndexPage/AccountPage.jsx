import React, { useContext, useState } from 'react'
import { UserContext } from '../../../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';


const AccountPage = () => {
    const [redirect, setRedirect]= useState(null);
    const {ready, user, setUser} = useContext(UserContext);
    const {subpage} = useParams();
    // if (subpage === undefined){
    //   subpage='myprofile';
    // };

async function logout(){
 await axios.post('/logout');
 setUser(null);
 setRedirect('/');
    };

    // if (!ready) { 
    //   return "Loading..."
    //  }

    if (ready && !user) 
      { 
        return <Navigate to={"/login"} />
      };




  function linkClasses (type=null){
    let classes = "py-2 px-6 ";
    if ((type === subpage)){
      classes += "hover:bg-red-500 rounded-full hover:text-white"
    }
    return classes;

  }
  if (redirect){
    return <Navigate to={redirect} />
    
  }


  console.log(subpage);

  return (
    <div>
      <nav className= ' flex p-2 mt-8 justify-center gap-4 '>
      <Link className= {linkClasses('myprofile')}  to={"/account/myprofile"}>My profile</Link>
        <Link className={linkClasses('myprofile')} to={"/account/bookings"}>My bookings</Link>
        <Link className={linkClasses('myprofile')} to={"/account/places"}>My places</Link> 
      </nav>
      {subpage ==="myprofile" && (
        <div className='text-center max-w-2xl  mx-auto'>
          Logged in as {user.name} ({user.email})
          <div className=''>
          <button className='bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4   rounded-full' onClick={logout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountPage;