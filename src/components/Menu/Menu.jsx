import React from 'react'
import "./menu.scss"
import "../../styles/global.scss"

// imported components
import User from "../User/User";
import Input from "../Input/Input";
import Pinned from "../Pinned/Pinned";
import PinnedList from "../PinnedList/PinnedList";
import Recommended from '../Recommended/Recommended';

const Menu = () => {

    return (

        <div className="menu--container">

            <div className="menu--display">

                <Input />

                <Pinned header="Pinned" buttonText="All apps" />
                <PinnedList />
                <Pinned header="Recommended" buttonText="More" />
                <Recommended />

            </div>

            <User />

        </div>

    )

}

export default Menu
