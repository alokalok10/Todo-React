import React from 'react';
import { Link } from 'react-router-dom';
import "./navigationMenu.scss"


const NavigationMenu = () =>
{
    return (
        <><ul className="routes">
            <li className='routes__item'>
                <Link to="/">Home</Link>
            </li>
            <li className='routes__item'>
                <Link to="/todos">Todo List</Link>
            </li>

            <li className="routes__item">
                <Link to="https://github.com/alokalok10" target="_blank" rel="noopener noreferrer">
                    Alok (GitHub)
                </Link>
            </li>

            <li className="routes__item">
                <Link to="https://www.linkedin.com/in/alok-prabhat-17b906192" target="_blank" rel="noopener noreferrer">
                    Alok (Linkdin)
                </Link>
            </li>


        </ul><div className="portfolio-link">
                <Link to="https://alokalok10.github.io/alokalok.git.io/" target="_blank" rel="noopener noreferrer">
                    Portfolio
                </Link>
            </div></>

    );
}

export default NavigationMenu;
