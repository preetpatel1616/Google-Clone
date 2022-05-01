import React from 'react';
import Search from '../components/Search';
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';

function Home() {
    return(
        <div className='home'>
        <header className='home-header'>

                <Link to='gmail'>Gmail</Link>
                <Link to='images'>Images</Link>
                <AppsIcon/>
                <Avatar/>

        </header>

        <body className='home-body'>
            <img src='https://vcet.co/wp-content/uploads/2018/08/GOOGLE.jpg' alt='Google'></img>
            <div className='home-input-container'>
                <Search/>
            </div>


        </body>

        </div>
    )
}

export default Home