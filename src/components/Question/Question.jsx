import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Question = ({ ques, name }) => {
    console.log(ques);
    // const questions = ques.question;
    // const test = questions.split('<');
    const [isDisabled,setIsDisabled] = useState(false);
    const handleClick =(choseen) =>{
        if(ques.correctAnswer===choseen){
            toast.success("Correct answer!!!", {autoClose:1000});
        }
        else{
            toast.error("Wrong answer",{autoClose:1000})
        }
        setIsDisabled(!isDisabled);
    }
    return (
        <div>
            {/* <h1 className='text-center'>Quiz of {name}</h1> */}
            <h1>{ques.question.replace(/(<([^>]+)>)/ig, '')}</h1>
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
                        onClick={()=>handleClick(ques.options[1])}/>
                        <label className="form-check-label" htmlFor={ques.id + "1"}>
                            {ques.options[1]}
                        </label>
                    </div>
                    <div className="form-check" 
                    >
                        <input className="form-check-input" type="radio" name={ques.id}
                            id={ques.id + "2"} value="option3" 
                            onClick={()=>handleClick
                            (ques.options[2])}/>
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
                                    (ques.options[3])}/>
                                <label className="form-check-label" htmlFor={ques.id + "3"}>
                                    {ques.options[3]}
                                </label>
                            </div>: <div></div>
                    }
                </div>

            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Question;