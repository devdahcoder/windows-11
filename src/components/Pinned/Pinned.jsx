import React from 'react';
import "./pinned.scss";
import "../../styles/global.scss";

const Pinned = ({header, buttonText}) => {

    return (

        <div className="pinned--container">

            <div className="pinned--content">

                <div className="pinned--header">

                    <div className="pinned--header--text">
                        <p className="">{header}</p>
                    </div>

                    <div className="pinned--header--icon">

                        <button className="pinned--button svg--button">

                            {buttonText}

                            <span className="pinned--svg--span--container">

                                <svg  width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.84882 5.49734C5.88359 5.53202 5.91117 5.57322 5.92999 5.61857C5.94881 5.66392 5.9585 5.71254 5.9585 5.76165C5.9585 5.81075 5.94881 5.85937 5.92999 5.90473C5.91117 5.95008 5.88359 5.99127 5.84882 6.02595L1.36908 10.5057C1.29899 10.5758 1.20391 10.6152 1.10478 10.6152C1.00565 10.6152 0.910573 10.5758 0.840475 10.5057C0.770377 10.4356 0.730996 10.3405 0.730996 10.2414C0.730996 10.1423 0.770377 10.0472 0.840475 9.97708L5.05665 5.76165L0.840475 1.54621C0.770377 1.47612 0.730997 1.38104 0.730997 1.28191C0.730997 1.18278 0.770377 1.0877 0.840475 1.01761C0.910573 0.947507 1.00565 0.908127 1.10478 0.908127C1.20391 0.908127 1.29899 0.947507 1.36908 1.01761L5.84882 5.49734Z" fill="white"/>
                                </svg>

                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Pinned
