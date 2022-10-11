import React, { useContext } from 'react';
import banner from '../../images/quizyBanner.png'
import { TopicsContext } from '../layout/Main';
import Topic from '../Topic/Topic';
const Home = () => {
    // const quiz = useLoaderData();
    // console.log(quiz);
    const topics = useContext(TopicsContext);
    // console.log(topics);
    return (
        <div>
            <img src={banner} alt="" className='w-100'/>
            <div className='my-5 mx-auto row row-col-1 row-cols-sm-2  gy-4 '>
            {
                topics.map(topic=> 
                <Topic key={topic.id}
                topic={topic}
                ></Topic>)
            }
            </div>
        </div>
    );
};

export default Home;