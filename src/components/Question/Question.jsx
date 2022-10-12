import React from 'react';
const Question = ({ ques, name }) => {
    console.log(ques);
    // const questions = ques.question;
    // const test = questions.split('<')
    const handleClickc =() =>{

    }
    return (
        <div>
            {/* <h1 className='text-center'>Quiz of {name}</h1> */}
            <h1>{ques.question.replace(/(<([^>]+)>)/ig, '')}</h1>
            {
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name={ques.id} id={ques.id} value="option1" />
                        <label className="form-check-label" htmlFor={ques.id}>
                            {ques.options[0]}
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name={ques.id}
                            id={ques.id + "1"} value="option2" />
                        <label className="form-check-label" htmlFor={ques.id + "1"}>
                            {ques.options[1]}
                        </label>
                    </div>
                    <div className="form-check" 
                    onClick={handleClickc()}>
                        <input className="form-check-input" type="radio" name={ques.id}
                            id={ques.id + "2"} value="option3" />
                        <label className="form-check-label" htmlFor={ques.id + "2"}>
                            {ques.options[2]}
                        </label>
                    </div>
                    {
                        (ques.options.length===4)?
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name={ques.id}
                                    id={ques.id + "3"} value="option4" />
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