import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TechCard = (props) => {
    const  tech  = props.tech;

    return(
        <div className="card-container">
            <img src="" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-tech/${tech._id}`}>
                        { tech.name }
                    </Link>
                </h2>
                <h3>{tech.title}</h3>
            </div>
        </div>
    )
};

export default TechCard;
