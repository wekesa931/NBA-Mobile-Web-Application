import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';

import './slider.css';

const SliderTemplate = (props) => {
    let template = null;
    const settings = {
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }

    switch(props.type){
        case("featured"):
            template = props.data.map((item,i) => (
                <div key={i}>
                    <div className="featured_item">
                        <div className="featured_image"
                            style={{
                                background: `url(../images/articles/${item.image})`
                            }}></div>
                        <Link to={`/articles/${item.id}`}>
                            <div className="featured_caption">
                                {item.title}
                            </div>
                        </Link>
                    </div>
                </div>
            ))
            break;
        default:
            template = null;
    }
    return ( 
        <Slick {...settings}>
            {template}
        </Slick>
     );
}
 
export default SliderTemplate;
