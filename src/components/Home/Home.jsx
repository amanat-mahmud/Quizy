import React, { useContext } from 'react';
import banner from '../../images/quizyBanner.png'
import { TopicsContext } from '../layout/Main';
const Home = () => {
    // const topics = useLoaderData();
    // console.log(topics);
    const test = useContext(TopicsContext);
    console.log(test);
    return (
        <div>
            <img src={banner} alt="" className='w-100'/>
            {
                
            }
        </div>
    );
};

export default Home;