import React, { useState } from 'react';
import '../css/App.css';

import SearchRestaurants from './SearchRestaurants';
import AllRestaurants from './AllRestaurants';

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
      states: [],
      isLoaded: false,
      orderBy: 'name',
      orderDir: 'asc',

    };
    this.filterByState = this.filterByState.bind(this);

  }

  filterByState(byState) {
    this.setState({
      items: this.state.items.filter(item => item.state == byState)

    });
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
      .then(result => {
        // this.setState({
        //   items: json,
        //   isLoaded: true,

        // })

        const restaurants = result.map(item => {
          return item;
        });

        // Get a list of unique and sorted states
        const states = result.map(item => item.state)
        let sortedStates = states
        let uniqueAndSortedStates = [...new Set(sortedStates)].sort()
        console.log(uniqueAndSortedStates)



        this.setState({
          items: restaurants,
          states: uniqueAndSortedStates,
          isLoaded: true,
        });
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

    // Get all items
    const { isLoaded, items, states } = this.state;
    console.log(items);




    // Sort items by Name in 'asc' order
    let order;
    let sortedItems = this.state.items;

    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    sortedItems.sort((a, b) => {
      if (a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    });



    // A user should be able to see a table with the name, city, state, phone number, and genres for each restaurant.
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
                <SearchRestaurants
                  states={states}
                  filterByState={this.filterByState} />
                <AllRestaurants restaurants={sortedItems} />

              </div>
            </div>
          </div>
        </div>

      </main>

    );
  }
}

export default App;