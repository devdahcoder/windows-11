import React from 'react';
import "./user.scss";
import "../../styles/global.scss";


const User = () => {

    return (

        <div className="user--container">

            <div className="user--display">

                <div className="user--profile--container">

                    <div className="user--profile--image">

                        <img className="user--profile" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="profile" />

                    </div>

                    <div className="user--profile--name">

                        <span className="user--profile--name--span">John Doe</span>

                    </div>

                </div>

                <div className="power--button--container">

                    <div className="power--button svg--button--container">

                        <button className="power--button svg--button">

                            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.47656 0.566315C9.74316 0.566315 9.85742 0.683428 9.85742 0.683428V8.02253C9.85742 8.06156 9.70507 8.17868 9.47656 8.17868H9.43847C9.20996 8.17868 9.0957 8.06156 9.05762 8.06156V0.683428C9.0957 0.644391 9.24805 0.566315 9.47656 0.566315Z" fill="white" stroke="white" stroke-width="0.87125" stroke-miterlimit="10"/>
                                <path d="M9.28606 19.7339C4.86813 19.7339 1.25 16.0253 1.25 11.4969C1.25 8.25676 2.88768 5.44604 5.51559 4.07972C5.55367 4.07972 5.59176 4.04068 5.62985 4.04068C5.66793 4.04068 5.66793 4.04068 5.70602 4.04068C5.78219 4.07972 5.82027 4.11875 5.85836 4.19683C5.89644 4.27491 5.89644 4.35298 5.85836 4.39202C5.82027 4.47009 5.78219 4.50913 5.70602 4.54817C3.26854 5.79738 1.74511 8.45195 1.74511 11.4579C1.74511 15.713 5.09665 19.1483 9.24798 19.1483C13.3993 19.1483 16.7508 15.713 16.7508 11.4579C16.7508 8.45195 15.2274 5.83642 12.828 4.54817C12.7138 4.47009 12.6376 4.31394 12.7138 4.19683C12.7899 4.07972 12.9423 4.00164 13.0565 4.07972C15.6464 5.44604 17.284 8.25676 17.284 11.4579C17.3221 16.0643 13.704 19.7339 9.28606 19.7339Z" fill="white" stroke="white" stroke-width="0.87125" stroke-miterlimit="10"/>
                            </svg>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default User
