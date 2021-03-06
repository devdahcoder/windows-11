import React from 'react';
import "./input.scss";

const Input = () => {

    return (

        <div className="menu--search--container">

            <div className="menu--search--display">

                <div className="menu--search--icon--container">

                    <button className="menu--search--button svg--button">

                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5625 13.8125C6.04169 13.8125 3.1875 10.9583 3.1875 7.4375C3.1875 3.91668 6.04169 1.0625 9.5625 1.0625C13.0833 1.0625 15.9375 3.91668 15.9375 7.4375C15.9375 10.9583 13.0833 13.8125 9.5625 13.8125Z" stroke="#8A8A8A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.78125 12.2187L1.0625 15.9375" stroke="#8A8A8A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </button>

                </div>

                <input className="menu--search--input" type="text" placeholder="Type here to search" />

            </div>

        </div>

    )

}

export default Input
