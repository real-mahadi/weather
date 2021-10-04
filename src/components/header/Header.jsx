import { useEffect, useState } from 'react';
import './Header.css';
import { clock12Hour } from './../../logic/DayTimeImage'

function Header() {
    const [time, setTime] = useState(clock12Hour())

    //after every 10 seconds it will update time
    useEffect(() => {
        setInterval(() => {
            setTime(clock12Hour());
        }, 10000)
    })

    return (
        <header>
            <h1 className='header-time'>{time}</h1>
        </header>
    );
}

export default Header;