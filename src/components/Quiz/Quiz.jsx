import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizdata = useLoaderData();
    const quizs = quizdata.data;
    // console.log(quizs);
    return (
        <div>
            <Questions
            quizs={quizs}></Questions>
        </div>
    );
};

export default Quiz;