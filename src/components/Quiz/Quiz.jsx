import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizdata = useLoaderData();
    console.log(quizdata);
    return (
        <div>
            <h1>Quiz</h1>
            <p>In quiz</p>
        </div>
    );
};

export default Quiz;