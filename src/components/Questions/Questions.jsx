
import React, { createContext } from 'react';
import { Button, } from 'react-bootstrap';
import Question from '../Question/Question';

export const RightAnsContext = createContext(0);

const Questions = ({quizs}) => {
    const questions = quizs.questions;
    // console.log(quizs);
    
    const handleResult = ()=>{
         console.log(RightAnsContext);
    }
    return (
        <RightAnsContext.Provider value={0}>
            <div>
            {
                questions.map(ques=><Question
                key={ques.id}
                ques={ques}
                name={quizs.name}></Question>)
            }
            <div className='my-5 mx-5'>
            <Button variant='primary' onClick={handleResult}>See Result</Button>
            </div>
        </div>
        </RightAnsContext.Provider>
    );
};

export default Questions;