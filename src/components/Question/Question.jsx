import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RightAnsContext, WrongAnsContext } from '../Questions/Questions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye } from '@fortawesome/free-solid-svg-icons'
const Question = ({ ques, name }) => {
    // console.log(ques);
    const [rightAns,setRightAns] = useContext(RightAnsContext);
    const [wrongAns,setWrongAns] = useContext(WrongAnsContext);
    // const questions = ques.question;
    // const test = questions.split('<');
    const [isDisabled,setIsDisabled] = useState(false);
    let corAns, wrngAns = 0;
    const handleClick =(choseen) =>{
        if(ques.correctAnswer===choseen){
            toast.success("Correct answer!!!", {autoClose:1000});
            // corAns=corAns+1;
            setRightAns(rightAns+1)
        }
        else{
            toast.error("Wrong answer",{autoClose:1000});
            // wrngAns=wrngAns+1;
            setWrongAns(wrongAns+1);
        }
        setIsDisabled(!isDisabled);
    }
    const showAns = ()=>{
        toast.info(`Correct answer is: ${ques.correctAnswer}`,{autoClose:1000});
        // alert(`Correct answer is :${ques.correctAnswer}`);
    }
    return (
        <div>
            {/* <h1 className='text-center'>Quiz of {name}</h1> */}
            <div className='d-flex'>
            <h1>{ques.question.replace(/(<([^>]+)>)/ig, '')}</h1>
            <FontAwesomeIcon icon={faEye} onClick={()=>showAns()}/>
            </div>
            {
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name={ques.id} id={ques.id} value="option1" onClick={()=>handleClick(ques.options[0])} disabled={isDisabled}
                        />
                        <label className="form-check-label" htmlFor={ques.id}>
                            {ques.options[0]}
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name={ques.id}
                        id={ques.id + "1"} value="option2" 
                        onClick={()=>handleClick(ques.options[1])}
                        disabled={isDisabled}/>
                        <label className="form-check-label" htmlFor={ques.id + "1"}>
                            {ques.options[1]}
                        </label>
                    </div>
                    <div className="form-check" 
                    >
                        <input className="form-check-input" type="radio" name={ques.id}
                            id={ques.id + "2"} value="option3" 
                            onClick={()=>handleClick
                            (ques.options[2])} disabled={isDisabled}/>
                        <label className="form-check-label" htmlFor={ques.id + "2"}>
                            {ques.options[2]}
                        </label>
                    </div>
                    {
                        (ques.options.length===4)?
                            <div className="form-check"
                            >
                                <input className="form-check-input" type="radio" name={ques.id}
                                    id={ques.id + "3"} value="option4" 
                                    onClick={()=>handleClick
                                    (ques.options[3])} disabled={isDisabled}/>
                                <label className="form-check-label" htmlFor={ques.id + "3"}>
                                    {ques.options[3]}
                                </label>
                            </div>: <div></div>
                    }
                </div>
            }           
        </div>
    );
};

export default Question;