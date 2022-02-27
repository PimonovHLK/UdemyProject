import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const Header = () => {
  return <h2>Hello world!</h2>
}
// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   }
//   return <input placeholder={holder} type="text" style={styledField}/>
// }

class Field extends Component {
    render() {
              const holder = 'Enter here';
              const styledField = {
              width: '300px'
  }
  return <input placeholder={holder}
                type="text"
                style={styledField}/>
  }
}

function Btn() {
  const text = "Log in";
  const logger = false;

  return <button>{logger ? 'Enter' : text}</button>
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
export {Header};
