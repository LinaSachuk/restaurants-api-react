import React, { useState } from 'react';
import '../css/App.css';

import SearchRestaurants from './SearchRestaurants';

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {


  constructor(props) {

    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {

    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers: {
        Authorization: "Api-Key q3MNxtfep8Gt",
      },
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,

        })
      }).catch((err) => {
        console.log(err);
      });

  }

  /**
   * render
   *
   * Render UI
   */
  render() {

    const { isLoaded, items } = this.state;
    console.log(items);
    // address1: "201 Waterfront St"
    // attire: "business casual"
    // city: "Oxon Hill"
    // genre: "Steak,American,Contemporary,Seafood,Cafe"
    // hours: "Open Daily 5:30 PM-10:00 PM"
    // id: "f223fdd0-4adc-423e-9747-980a66c256ca"
    // lat: "38.782098"
    // long: "-77.017492"
    // name: "Old Hickory Steakhouse"
    // state: "MD"
    // tags: "Social,Food and Dining,Restaurants,Steakhouses"
    // telephone: "(301) 965-4000"
    // website: "http://www.gaylordnational.com"
    // zip: "20745"
    if (!isLoaded)
      return <div>Loading...</div>;

    return (

      <main className='page bg-white' id='ratings'>
        <div className='container'>
          <div className='row'>
            <div className='col-mid-12 bg-white'>
              <div className='container'>
                <SearchRestaurants />
                <div>All Restaurants</div>

              </div>
            </div>
          </div>
        </div>
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | City: {item.city}
              </li>
            ))}
          </ul>
        </div>
      </main>

    );
  }
}

export default App;