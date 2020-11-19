import React, { Component } from 'react';

class AllRestaurants extends Component {
    render() {
        const listItems = this.props.restaurants.map(item => (

            <div>
                <div>{item.name}</div>
                <div>{item.attire}</div>
            </div>

        ));




        return <div>{listItems}</div>
    }
}

export default AllRestaurants;