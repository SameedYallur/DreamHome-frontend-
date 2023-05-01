import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import './home.css';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="formBranchContainer3">
    <div className='homeBG'>
    <Sidebar />
    <div className='homeimage'></div>
    <div className='welcomeText2'>Welcome to Dream Home</div>
    <div className='slogan'>
    A place where you can find a perfect place to live and rent just like in your dreams.
    </div>
    </div>
    </div>
    </>
    );
}
