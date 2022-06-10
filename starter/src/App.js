import {useState} from 'react';
import './App.css';
import Form from './Form';
import dataContext from './context';


const {Provider} = dataContext;

function App() {
    const [data, setData] = useState({

        mail: "name@example.com",
        text: 'some text',
        forcedChangeMail: forcedChangeMail
    });  

    function forcedChangeMail () {
        setData({...data, mail: 'test@gmail.com'})
    }

    return (
        <Provider value={data}>
            <Form text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text',
                    forcedChangeMail: forcedChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;