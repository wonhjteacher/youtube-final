import React from 'react';
import './index.css';
/* 
import React, { memo } from 'react'; 
const SideMenu =memo (() => {
*/

const SideMenu =React.memo(() => {
    return (
        <div className='sideMenu'>
            <button className='sideBtn'>
                <i className="fas fa-home"></i>
                홈
            </button>
            <button className='sideBtn'>
                <i className="fas fa-fire"></i>
                인기
            </button >
            <button className='sideBtn'>
                <i className="fab fa-youtube"></i>
                구독
            </button>
            <button className='sideBtn'>
                <i className="fas fa-archive"></i>
                Originals
            </button>
            <button className='sideBtn'>
                <i className="fas fa-box"></i>
                보관함
            </button>
        </div>
    );
});

export default SideMenu;