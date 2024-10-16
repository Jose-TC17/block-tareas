import { useState } from 'react'
import './css/Header.css'

export function Header() {
    const hart = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
        <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
    </svg>

    const flag = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
        <path d="M3.5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0v-4.392l1.657-.348a6.449 6.449 0 0 1 4.271.572 7.948 7.948 0 0 0 5.965.524l2.078-.64A.75.75 0 0 0 18 12.25v-8.5a.75.75 0 0 0-.904-.734l-2.38.501a7.25 7.25 0 0 1-4.186-.363l-.502-.2a8.75 8.75 0 0 0-5.053-.439l-1.475.31V2.75Z" />
    </svg>

    // estado principal
    const [theme, functTheme] = useState(true);

    const body = document.body;
    const themeFunct = ()=>{
        functTheme(!theme);
        if (!theme){
            body.classList.remove("dark");
        }
        else{
            body.classList.add("dark");
        }
    }
    
    const stateBtn = !theme ? 'check-theme-dark' : 'check-theme';
  
    return (
        <header className="header-page">
            <div className="logo-page">
                <div className="image-page"><img src="/images/blockTareas.png" alt="logo" /></div>
                <div className="logo-text">Block de Tareas</div>
            </div>
            <nav className="nav">
                <ul>
                    <li><i className='logo-hart'>{hart}</i><a className='hart' href="">Favoritos</a></li>
                    <li><i className='logo-flag'>{flag}</i><a className='flag' href="">Importante</a></li>
                    <li>
                        <div className={stateBtn} onClick={themeFunct}></div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}