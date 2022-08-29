import React from 'react'
import './sidebar.scss';

export default function NavBar() {

    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                <li>
                    <img src="/images/meditation.png" alt="" className='sidebar__icon' />
                </li>
                <li>
                    <img src="/images/swim.png" alt="" className='sidebar__icon' />
                </li>
                <li>
                    <img src="/images/bike.png" alt="" className='sidebar__icon' />
                </li>
                <li>
                    <img src="/images/weight.png" alt="" className='sidebar__icon' />
                </li>
            </ul>
            <p className='sidebar__copyright'>Copyright, SportSee 2020</p>
        </div>
    )
}