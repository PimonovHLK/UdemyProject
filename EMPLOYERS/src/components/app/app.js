// import AppInfo from '../app-info/app-info';
// import SearchPanel from '../search-panel/search-panel';
// import AppFilter from '../app-filter/app-filter';
// import EmployeesList from '../employees-list/employees-list';
// import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { Component } from 'react';

import './app.css';

class WhoAmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    }
  }

nextYear = () => {  
  this.setState(state => ({
    years: state.years + 1
  }))
}

  render() {
    const{name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  
  return (
    <div className="App">
      <WhoAmi name='John' surname="Smith" link="facebook.com"/>
      <WhoAmi name='Alex' surname="Shepard" link="vk.com"/>    
    </div>
  )

  // const data = [
  //   {name: 'John C.', salary: 800, increase: false, id: 1}, 
  //   {name: 'Alex M.', salary: 3000, increase: true, id: 2}, 
  //   {name: 'Carl W.', salary: 15000, increase: false, id: 3}, 
  // ]

  // return (
  //   <div className="app">        
  //       <AppInfo />
  //       <div className="search-panel">
  //           <SearchPanel/>
  //           <AppFilter/>
  //       </div>        
  //       <EmployeesList data={data}/>
  //       <EmployeesAddForm/>
  //   </div>
  // );
}

export default App;
