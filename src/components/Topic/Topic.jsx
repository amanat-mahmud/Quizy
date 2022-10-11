import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Topic = ({topic}) => {
    // const quiz = useLoaderData();
    // console.log(quiz);
    return (
        <div className='col'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={topic.logo} />
                <Card.Body>
                    <Card.Title>{topic.name}</Card.Title>
                    <Card.Text>
                        Quiz:{topic.total}
                    </Card.Text>
                    <Link to={`../topic/${topic.id}`}><Button variant="primary">Start Quiz</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Topic;