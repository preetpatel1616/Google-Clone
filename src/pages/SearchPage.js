import React, { useEffect, useState } from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogle from '../useGoogle';
import { response } from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import {useParams} from 'react-router-dom';


function SearchPage() {
    const [state, dispatch] = useStateValue();
    const [scrolled, Setscrolled] = useState(false);

    // const [searchParams, setSearchParams] = useSearchParams();
    // const key = searchParams.get("key");
    const {input} = useParams()
    const {data} = useGoogle(input);
    // const data = response;

    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            if(window.scrollY>30){
                Setscrolled(true);
            }

            else{
                Setscrolled(false);
            }
        })

    },[])
    
    return (
        <div className='searchpage'>
            <header className='searchpage-header'>

                <div className={`searchpage-header-top ${scrolled ? "active":null}`}>

                    <div className='searchpage-header-top-left'>
                        <Link to='/'>
                            <img className='searchpage-logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google' />
                        </Link>

                        <Search value={state.term} hideButtons />
                    </div>

                    <div className='options-right'>
                        <div className='searchpage-option'>
                            <Link to='/settings'>Setting</Link>
                        </div>
                        <div className='searchpage-option'>
                            <Link to='/tools'><AppsIcon /></Link>
                        </div>
                        <div className='searchpage-option'>
                            <Link to='/tools'> <Avatar /></Link>
                        </div>
                    </div>

                </div>

                <div className={`searchpage-header-bottom ${scrolled? "hidden":null}`}>
                    <div className='searchpage-option'>
                        <SearchIcon />
                        <Link to='/all'>All</Link>
                    </div>
                    <div className='searchpage-option'>
                        <RoomIcon />
                        <Link to='/maps'>Maps</Link>
                    </div>
                    <div className='searchpage-option'>
                        <ImageIcon />
                        <Link to='/images'>Images</Link>
                    </div>
                    <div className='searchpage-option'>
                        <DescriptionIcon />
                        <Link to='/news'>News</Link>
                    </div>
                    <div className='searchpage-option'>
                        <LocalOfferIcon />
                        <Link to='/shopping'>Shopping</Link>
                    </div>

                    <div className='searchpage-option'>
                        <MoreVertIcon />
                        <Link to='/more'>More</Link>
                    </div>
                </div>
            </header>

            {state.term && (
                <div className='searchpage-results'>
                    <p className='searchpage-result-count'>
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {state.term}
                    </p>


                    {data?.items.map(item => (
                        <div className='searchpage-result'>
                            <a className='searchpage-result-display-link' href={item.link}>https://{item.displayLink}
                            </a>
                            <a className='searchpage-result-title' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchpage-result-snippet'>{item.snippet}</p>

                        </div>
                    ))}
                </div>
            )
            }
        </div>
    );
}

export default SearchPage;