import React, { Component } from 'react';

class AllRestaurants extends Component {
    render() {

        return (
            <div>
                <ul>
                    {this.props.restaurants.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | City: {item.city} | State: {item.state} | Phone Number: {item.telephone} | Genre: {item.genre}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default AllRestaurants;