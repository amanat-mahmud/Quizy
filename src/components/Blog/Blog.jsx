import React from 'react';
import Card from 'react-bootstrap/Card';
import routerImg from '../../images/router.png'
import contextImg from '../../images/context.png'
import useRefImg from '../../images/useref.png';
const Blog = () => {
    return (
        <div className='m-5'>
            <Card>
                <Card.Img variant="top" src={routerImg} />
                <Card.Body>
                    <Card.Text>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.it uses dynamic routing.
                    Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app.React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mt-5'>
                <Card.Img variant="top" src={contextImg} />
                <Card.Body>
                    <Card.Text>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mt-5'>
                <Card.Img variant="top" src={useRefImg} />
                <Card.Body>
                    <Card.Text>
                        useRef() is a hook allows us to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.useRef() only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0).It is also used to access dom elements. It can also be used to keep track of previous state values.

                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Blog;