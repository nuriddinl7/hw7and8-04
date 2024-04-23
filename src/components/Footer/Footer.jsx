import { useState } from 'react';
import style from './style.module.css'


const Footer = () => {
  const [theme, setTheme] = useState('gray')

    return (
        <footer className={style.foot} style={{ background: theme }}>
             <button onClick={() => setTheme((prew) => prew == 'orange' ? 'gray' : 'orange')}>set theme</button>
            <div>
                <h1>Contact</h1>
                <h4>+996 557-17-76-97</h4>
                <h4>anvarbekovnuriddin8@gmail.com</h4>
            </div>
            <div>
                <h1>Category</h1>
                <h4>Carts</h4>
                <h4>Animals</h4>
                <h4>Clock</h4>
            </div>
            <div>
                <h1>Adress</h1>
                <h4>Osh</h4>
                <h4>Bishkek</h4>
                <h4>Talas</h4>
                <h4>Haaryn</h4>
            </div>
            <div>
                <h1>About</h1>
                <h4>US</h4>
                <h4>Partners</h4>
                <h4>Sponsors</h4>
            </div>
        </footer>
    );
}

export default Footer;
