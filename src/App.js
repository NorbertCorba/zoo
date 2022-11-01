import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {

  const AnimalsList = [
    {id : 1, name: 'Laki', type: 'lion', birthday: '2013-12-11'},
    {id : 2, name: 'Eli', type: 'elephant', birthday: '2010-05-24'},
    {id : 3, name: 'Micko', type: 'parrot', birthday: '2020-07-14'},
    {id : 4, name: 'Kroki', type: 'crocodile', birthday: '2005-04-09'},
    {id : 5, name: 'Boban', type: 'turtle', birthday: '2000-10-05'}
  ];

  return (
    <div>
      <h2>Animals in the zoo</h2>
      <table>
      <thead>
        <th>Name</th> 
        <th>Type</th>
        <th>Birthday</th>

      </thead>
      <tbody>
      <td>{AnimalsList.map((element) => (
   
               <tr key={element.id}>{element.name}</tr>
              ))}
      </td>

        <td>{AnimalsList.map((element) => (
               <tr key={element.id}>{element.type}</tr>
              ))}
        </td>
        <td>{AnimalsList.map((element) => (
               <tr key={element.id}>{element.birthday}</tr>
              ))}
        </td>
      </tbody>
      </table>

    </div>

  );

};

export default App;
