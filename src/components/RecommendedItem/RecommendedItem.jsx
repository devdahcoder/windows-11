import React from 'react';
import "./recommendeditem.scss"

const RecommendedItem = ({item}) => {

    return (

        <div className="recommended--item--container">

            <div className="recommended--item--display">

                <div className="recommended--item--image">

                    <img src={item.image} alt=""/>

                </div>

                <div className="recommended--item--info">

                    <div className="recommended--item--title">{item.title}</div>

                    <div className="space--div">
                        
                    </div>

                    <div className="recommended--item-description">{item.description}</div>

                </div>

            </div>

        </div>

    )

}

export default RecommendedItem
