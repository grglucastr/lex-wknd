import React, { Component } from 'react';

import Areas from './Areas';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      areas: [
        {
          name: 'Quadras', 
          slug:'quadra',
          subareas: [
            {
              name:'Basquete',
              slug:'basquete', 
              types: [
                {name:'Coberta', details:'Lorem ipsum dolor sit amet'},
                {name:'Aberta', details:'Lorem ipsum dolor sit amet'}
              ]
            },

            {
              name:'Tennis',
              slug:'tennis', 
              types: [
                {name:'Green', details:'Lorem ipsum dolor sit amet'},
                {name:'Beige', details:'Lorem ipsum dolor sit amet'}
              ]
            },

            {
              name:'Futsal', 
              slug:'futsal',
              types: [
                {name:'Grande', details:'Lorem ipsum dolor sit amet'},
                {name:'Pequena', details:'Lorem ipsum dolor sit amet'}
              ]
            }
          ]
        },

        {
          name: 'Piscinas',
          slug:'piscina',
          subareas: [
            {
              name: 'Infantil',
              types: []
            },
            {
              name: 'Adulto',
              types: [
                { name: 'Olimpica', details: 'Lorem ipsum dolor sit amet' },
                { name: 'Normal', details: 'lorem ipsum dolor sit amet'}
              ]
            }

          ]
        }
      ]
    }
  }


  render() {
    return (
      <div className="container-fluid">
        <Areas areas={this.state.areas} />
      </div>
    );
  }
}

export default App;
