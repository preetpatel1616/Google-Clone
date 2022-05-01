import React, { useEffect, useState } from "react";
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { CrossIcon, MicIcon } from "./Icons";
import {Button} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({hideButtons}) => {
    const[state, dispatch] = useStateValue();  //global state
    const navigate = useNavigate();
    const [input, setInput] = useState(""); //Creating local variable/state

    const search = (e)=>{
        e.preventDefault();

        dispatch({
            type: actionTypes.set_search_term,
            term: input
        })
        
        navigate(`/search/${input}`);
    }


    return(
        <form className="search">
            <div className="search-input">
                <SearchIcon className='search-input-icon'/>
                <input value={input} onChange={(e) => {setInput(e.target.value)} }  placeholder="Search Google or type a URL"/>
                <CrossIcon searchterm={input}/>
                <MicIcon/>
            </div>

            {!hideButtons ? (
                <div className="search-buttons">
                <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ): (
                <div className="search-buttons-hidden">
                <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                <Button variant="outlined">I am feeling lucky</Button>
                </div>
            )
            }
           
        </form>
    );


}

export default Search;