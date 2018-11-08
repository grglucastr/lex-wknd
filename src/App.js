import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import AreaBar from './AreaBar';
import AreaDetails from './AreaDetails';

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
        },

        {
          name: 'Gaming Room',
          slug:'gaming-room',
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

    const {areas} = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <AreaBar areas={areas} />

            <Route exact path='/' component={Home}  />

            {
             areas.map(({slug, name}) => (
              <Route path={`/${slug}`} key={slug}  render={() => (
                <AreaDetails name={name} />
              )} />
             ))
            }
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
