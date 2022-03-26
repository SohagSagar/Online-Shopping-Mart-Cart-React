import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <h5>Bonus Marks Content::</h5><hr />

            <p className='question'>Q<sub>1</sub>.How react works?</p>
            <p>A: React is a popular JavaScript library which helps to make modern website interface more user-friendly as well as it gives a comfort zone to the developer to make complex UI interface with efficient performance. To increase the performance, react make a ‘Virtual DOM’ which is nothing but a copy of the ‘Real DOM’ and by using this Virtual DOM react can easily map changed elements of the real Dom and then it just works with the changed elements. As a result, it need not think about the other elements of the website. As a result, it boosts up the web performance and that is the main beauty of react.</p>


            <p className='question'>Q<sub>2</sub>.How react useState() works?</p>
            <p>A:‘useState()’ is a powerful react hook to manage state of a functional components. UseState() itself takes an argument which actually set the initial state value. The argument can be an array, an object or anything that need to be initialized. UseState() returns a pair of values i.e. the current state value and a function that is responsible for updating the current state. Current state always remembers the state value and setState is used for updating the state value. The easiest way to find the current state and setState function is array destructuring of the useState().<br></br>
            Example: const [count, setCount]=useState([]);</p>

            <p className='question'>Q<sub>3</sub>.What are the difference between props and state in react?</p>

            <p>A: 
            <b>Props:</b> <br></br>Props is like a container that is immutable and can store values, objects, array, function and so on from component to component. Basically it is carrier that is used to pass data from one component to other. But once data is passed to other component, data cannot be changed anymore. Props is a read only components. The value of props can only share form parent component to child component, vice versa is not allow here.<br></br>  
            <b>State:</b><br></br>
            State is a mutable component that is changed overtime with the updated data. Basically it is the heart of a component because by using the state behavior react is actually taking the rendering decision. State can be updated inside its own component i.e. the state information is not sharable to the other components.   
</p>


        </div>
    );
};

export default Footer;