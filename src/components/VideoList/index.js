import React from 'react';
import './index.css';
import VideoItem from '../VideoItem';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect ,useState } from 'react';
import { getVideoList } from './../../store/video/videoSlice';
import { videoUrl } from './../../lib/api';
import MoonLoader from "react-spinners/MoonLoader";
const VideoList = ({display}) => {
    const dispatch = useDispatch();
    const {data,loading}= useSelector((state) =>state.video)
    useEffect(() => {
        dispatch(getVideoList(videoUrl))
    },[])
    
    if(loading){
        return  <MoonLoader color="#f00" loading={loading} size={150} cssOverride={{
            position: `absolute`, top:`50%`, left:`50%`, marginTop:`-75px`, marginLeft:`-75px`}} speedMultiplier={1}  />
    }
    return (
        <ul className={display === 'grid' ? 'videoList VideoGrid' :'videoList VideoRowList'}>
            {
               data.map((item , idx) => (
                    <VideoItem key={item.snippet.thumbnails.default.url} item={item.snippet} value={item} />           
                ))
            }
           
        </ul>
    );
};

export default VideoList;