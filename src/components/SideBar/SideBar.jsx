import React from 'react'
import '../../assets/scss/components/sidebar.scss';

export default function NavBar() {

    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                <li>
                    <img src="/icons/meditation.png" alt="" className='sidebar__icon' />
                </li>
                <li>
                    <img src="/icons/swim.png" alt="" className='sidebar__icon' />
                </li>
                <li>
                    <img src="/icons/bike.png" alt="" className='sidebar__icon' />
                </li>
                <li>
                    <img src="/icons/weight.png" alt="" className='sidebar__icon' />
                </li>
            </ul>
            <p className='sidebar__copyright'>Copyright, SportSee 2020</p>
        </div>
    )
}