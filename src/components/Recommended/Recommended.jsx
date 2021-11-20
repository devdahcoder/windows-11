import {useState} from 'react';
import "./recommended.scss";

import First from "../../image 5.png";
import Second from "../../Get Started.png";
import Third from "../../Group 17.png";

// imported component
import RecommendedItem from '../RecommendedItem/RecommendedItem';
const Recommended = () => {

    const [recommended] = useState([
        {
            id:1,
            title:"Get Started",
            description: "Welcome to Windows",
            image: Second
            ,
        },
        {
            id:2,
            title:"Onedrive",
            description: "Recently added",
            image: First
            
            ,
        },
        {
            id:3,
            title:"Win11-paint",
            description: "1m ago",
            image: Third
            ,
        },
        {
            id:4,
            title:"win11-settings",
            description: "2m ago",
            image: Third
            ,
        },
    ]);

    return (

        <div className="recommended--container">

            {
                recommended.map(item => (<RecommendedItem key={item.id} item={item} />))
            }
            
        </div>

    )

}

export default Recommended
