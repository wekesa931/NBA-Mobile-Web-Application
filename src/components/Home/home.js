import React from 'react';
import NewsSlider from '../widgets/news_slider/slider';
import NewsList from '../widgets/NewsList/newsList';
import VideosList from '../widgets/Videoslist/videoslist';

const Home = () => {
    return ( 
        <div>
            <NewsSlider type="featured"
                        start={0}
                        amount={3}
            />
            <NewsList
                type="card"
                loadmore={true}
                start={0}
                amount={3}
                />
            <VideosList
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={3}
            />
        </div>
     );
}
 
export default Home; 