import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// class WhoAmi extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 27,
//       position: ''
//     }
//     // this.nextYear = this.nextYear.bind(this);
//   }

// nextYear = () => {  
//   this.setState(state => ({
//     years: state.years + 1
//   }))
// }
// commitInputChanges = (e, color) => {
//   console.log(color);
//   this.setState({
//     position: e.target.value
//   })
// }

//   render() {
//     const {name, surname, link} = this.props;
//     const {position, years} = this.state;
//     return (
//       <div>
//         <button onClick={this.nextYear}>{this.state.text}</button>
//         <h1>My name is {name}, surname - {surname},
//          age - {years}, 
//         position - {position}</h1>
//         <a href={link}>My profile</a>
//         <form>
//           <span>Введите должность</span>
//           <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
//         </form>
//       </div>
//     )
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: false, id: 1}, 
        {name: 'Alex M.', salary: 3000, increase: true, id: 2}, 
        {name: 'Carl W.', salary: 15000, increase: false, id: 3}, 
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {     
      return {
        data: data.filter(item => item.id !== id)
      }

    })
  }

  render () {
    return (
      <div className="app">        
          <AppInfo />
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
              <AppFilter/>
          </div>        
          <EmployeesList
           data={this.state.data}
           onDelete={this.deleteItem}
           />
          <EmployeesAddForm/>
      </div>
    );
  }

  // return (
  //   <div className="App">
  //     <WhoAmi name='John' surname="Smith" link="facebook.com"/>
  //     <WhoAmi name='Alex' surname="Shepard" link="vk.com"/>    
  //   </div>
  // )
     
}

export default App;
