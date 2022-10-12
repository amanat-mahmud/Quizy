
import React, { createContext, useState } from 'react';
import { Button, } from 'react-bootstrap';
import Question from '../Question/Question';

export const RightAnsContext = createContext(0);
export const WrongAnsContext = createContext(0);
const Questions = ({quizs}) => {
    const questions = quizs.questions;
    // console.log(quizs);
    const [rightAns,setRightAns] = useState(0)
    const [wrongAns,setWrongAns] = useState(0)
    const handleResult = ()=>{
        //  console.log(rightAns);
        //  console.log(wrongAns);
        alert(`Correact answer: ${rightAns}\nWrong answer: ${wrongAns}`)
    }
    return (
        <RightAnsContext.Provider value={[rightAns,setRightAns]}>
            <WrongAnsContext.Provider value={[wrongAns,setWrongAns]}>
            <div>
                <h1 className='text-center'>Quiz on {quizs.name}</h1>
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
            </WrongAnsContext.Provider>
        </RightAnsContext.Provider>
    );
};

export default Questions;