import React from 'react';
import Question from '../Question/Question';


const Questions = ({quizs}) => {
    const questions = quizs.questions;
    // console.log(quizs);
    return (
        <div>
            {
                questions.map(ques=><Question
                key={ques.id}
                ques={ques}
                name={quizs.name}></Question>)
            }
        </div>
    );
};

export default Questions;