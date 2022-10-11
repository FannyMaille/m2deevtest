import React, { useEffect, useState } from 'react';
import { setTheme } from '../../utils/Themes';
import Button from 'react-bootstrap/Button';

function SwitchDarkMode() {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return (
        <div className="container--toggle d-flex gap-3 align-items-center">
                <Button className='rounded-pill py-1 px-2 switch-color-btn' id="toggle" onClick={handleOnClick} >
                </Button>
            {
                togClass === "light" ?
                <span>Your are in Light mode</span>
                :
                <span>Your are in Dark mode</span>
            }
        </div>
    )
}

export default SwitchDarkMode;