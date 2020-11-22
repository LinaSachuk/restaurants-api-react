import React, { useState, useEffect } from 'react';
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
      genres: [],
      isLoaded: false,
      orderBy: 'name',
      orderDir: 'asc',
      byState: 'All',
      byGenre: 'All',
      queryText: '',
      currentPage: 1,
      itemsPerPage: 10

    };


    this.filterByState = this.filterByState.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.searchRestaurants = this.searchRestaurants.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);

  }

  filterByState(byState) {
    this.setState({
      byState: byState
    });
  }

  filterByGenre(byGenre) {
    this.setState({
      byGenre: byGenre
    });
  }

  searchRestaurants(guery) {
    this.setState({
      queryText: guery
    })
  }

  setCurrentPage(page) {
    this.state = ({
      currentPage: page
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

        // Get list of restaurants
        const restaurants = result.map(item => {
          return item;
        });

        // Get a list of unique and sorted states
        const states = result.map(item => item.state)
        let uniqueAndSortedStates = [...new Set(states)].sort()
        uniqueAndSortedStates.unshift("All");
        // console.log(uniqueAndSortedStates)

        // Get a list of unique genres
        const genres = result.map(item => item.genre.split(",")).flat()
        let uniqueAndSortedGenres = [...new Set(genres)].sort()
        uniqueAndSortedGenres.unshift("All")

        // console.log(uniqueAndSortedGenres)



        this.setState({
          items: restaurants,
          states: uniqueAndSortedStates,
          genres: uniqueAndSortedGenres,
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
    const { isLoaded, items, states, genres, itemsPerPage, currentPage } = this.state;
    console.log(items);
    console.log(states)
    console.log(genres)




    // Sort items by Name in 'asc' order
    let order;
    let sortedItems = this.state.items;

    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    sortedItems = sortedItems.sort((a, b) => {
      if (a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      // search results should match either the name, city, or genre.
      return (

        eachItem['name']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['city']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['genre']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase())
        //  || eachItem['state']
        //   .toLowerCase()
        //   .includes(this.state.byState.toLowerCase()) 




      );
    });



    let sortedFilteredItems = ''
    if (this.state.byState === 'All') {
      sortedFilteredItems = sortedItems;
    } else {
      sortedFilteredItems = sortedItems.filter(item => item.state === this.state.byState);
    }

    let finalItems = ''
    if (this.state.byGenre === 'All') {
      sortedFilteredItems = sortedFilteredItems;
    } else {
      sortedFilteredItems = sortedFilteredItems.filter(item => item.genre.toLowerCase()
        .includes(this.state.byGenre.toLowerCase()));
    }




    console.log(sortedFilteredItems)
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

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedFilteredItems.slice(indexOfFirstItem, indexOfLastItem)


    return (

      <main className='page bg-white' id='ratings'>
        <div className='container'>
          <div className='row'>
            <div className='col-mid-12 bg-white'>
              <div className='container'>
                <SearchRestaurants
                  states={states}
                  genres={genres}

                  byState={this.state.byState}
                  byGenre={this.state.byGenre}


                  filterByState={this.filterByState}
                  filterByGenre={this.filterByGenre}
                  searchRestaurants={this.searchRestaurants}
                />
                <AllRestaurants restaurants={currentItems} />

              </div>
            </div>
          </div>
        </div>

      </main>

    );
  }
}

export default App;