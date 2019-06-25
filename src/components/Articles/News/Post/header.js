import React from 'react'
import TeamNfo from '../../Elements/teaminfo';
import PostData from '../../Elements/postData';

const Header = (props) => {
    const teamNfo = (team) => (
        team ? 
            <TeamNfo team={team}/>
        :null
    )
    const postData = (date, author) => (
        <PostData data={{date,author}}/>
    )

    return ( 
        <div>
            {teamNfo(props.teamData)}
            {postData(props.date, props.author)}
        </div>
     );
}
 
export default Header;