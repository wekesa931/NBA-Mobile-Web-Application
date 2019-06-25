import React from 'react';
import '../../Articles/articles.css';

const TeamNfo = (props) => {
    return ( 
        <div className="articleteam_header">
            <div className="left"
                style={{
                    background: `url('/images/teams/${props.team.logo}')`
                }}
            >

            </div>
            <div className="right">
                <div>
                    <span>{props.team.city} {props.team.name}</span>
                </div>
                <div>
                    <strong>
                        W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
                    </strong>
                </div>
            </div>
        </div>
     );
}
 
export default TeamNfo;