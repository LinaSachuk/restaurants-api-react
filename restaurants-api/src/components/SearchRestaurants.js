import React, { Component } from 'react';

class SearchRestaurants extends Component {
    render() {
        return (
            <div className="search-restaurants row justify-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            id="SearchRestaurants"
                            type="text"
                            className="form-control"
                            aria-label="Search Restaurants"
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Filter by state: <span className="caret" />
                            </button>

                            <div className="sort-menu dropdown-menu dropdown-menu-right">
                                {this.props.states.map((s, index) => (

                                    <button
                                        key={index}
                                        className="sort-by dropdown-item"
                                        onClick={e => this.props.filterByState(s)}
                                        href="#" >
                                        {s}
                                    </button>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default SearchRestaurants;