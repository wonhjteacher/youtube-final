import React from 'react';
import './index.css';
import {useRef,useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getVideoList,videoListLayout} from '../../../store/video/videoSlice';
import { useNavigate } from 'react-router-dom';
import { searchUrl } from './../../../lib/api';

const SearchForm = () => {
    const dispatch = useDispatch();
    const inputRef=useRef();
    const navigate=useNavigate()
    const onSearch = (input) => {
        const url = searchUrl(input)
        dispatch(getVideoList(url))
        dispatch(videoListLayout('list'))
        navigate('/search')
    } 
    const onSubmit = (e) => {
        e.preventDefault();
        const input =inputRef.current.value;
        input && onSearch(input);
        inputRef.current.value = '';
    }
    return (
     <form className='search' onSubmit={onSubmit}>
        <input
            placeholder='검색'
            type="text"
            className='searchInput'
            ref={inputRef}
        />
        <button className='searchBtn'>
            <img src="/images/search.png" alt="search icon" className='searchIcon' />
        </button>
    </form>
    );
};

export default SearchForm;