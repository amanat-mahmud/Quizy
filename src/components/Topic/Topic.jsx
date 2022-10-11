import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Topic = ({topic}) => {
    return (
        <div className='col'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={topic.logo} />
                <Card.Body>
                    <Card.Title>{topic.name}</Card.Title>
                    <Card.Text>
                        Quiz:{topic.total}
                    </Card.Text>
                    <Button variant="primary">Start Quiz</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Topic;