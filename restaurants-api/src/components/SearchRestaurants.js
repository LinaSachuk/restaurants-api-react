import React, { Component } from 'react';
import styled from 'styled-components';

class SearchRestaurants extends Component {


    render() {
        let byState = this.props.byState;
        console.log(byState)
        let byGenre = this.props.byGenre;
        console.log(byGenre)
        return (
            <div className="search-restaurants row justify-content-center my-4">
                <div className="col-md-10">
                    <div className="input-group">
                        <input
                            id="SearchRestaurants"
                            type="text"
                            className="form-control"
                            aria-label="Search Restaurants"
                            onChange={e => this.props.searchRestaurants(e.target.value)}
                        />
                        <div className="input-group-append">
                            <div className="filter-by-state">
                                <button
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Filter by state:  {byState} <span className="caret" />
                                </button>
                                <div className="sort-menu dropdown-menu dropdown-menu-right">
                                    {this.props.states.map((s, index) => (

                                        <button
                                            key={index}
                                            className={'sort-by dropdown-item ' + (this.props.byState === s ? 'active' : '')}
                                            onClick={() => this.props.filterByState(s)}
                                            href="#" >

                                            {s}
                                        </button>

                                    ))}
                                </div>

                            </div>





                            <div className='filter-by-genre'>

                                <button
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Filter by genre: {this.props.byGenre} <span className="caret" />
                                </button>

                                <div className="sort-menu dropdown-menu dropdown-menu-right">
                                    {this.props.genres.map((g, i) => (

                                        <button
                                            key={i}
                                            className={'sort-by dropdown-item ' + (this.props.byGenre === g ? 'active' : '')}
                                            onClick={() => this.props.filterByGenre(g)}
                                            href="#" >
                                            {g}
                                        </button>

                                    ))}
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default SearchRestaurants;

