import React, { Component } from 'react';

class AllRestaurants extends Component {
    render() {

        return (
            <div className="mb-3 item-list" >
                {this.props.restaurants.map(item => (
                    <div key={item.id}>

                        <div className='container text-center'>
                            <h3>Name: {item.name} | City: {item.city} | State: {item.state} </h3>
                        </div>
                        <ul>
                            <li >
                                Phone Number: {item.telephone} | Genre: {item.genre}
                            </li>
                        </ul>
                    </div>


                ))}

            </div>
        )
    }
}

export default AllRestaurants;