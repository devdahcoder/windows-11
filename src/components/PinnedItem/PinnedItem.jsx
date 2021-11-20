import React from 'react';
import "./pinneditem.scss";

const PinnedItem = ({pinned}) => {

    return (

        <div className="pinned--item--container">

            <div className="pinned--item--display">

                <div className="pinned--item--image--container">

                    {pinned.image}

                </div>

                <div className="pinned--item--details--container">

                    <div className="pinned--item--details--text">

                        <span>{pinned.title}</span>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default PinnedItem
