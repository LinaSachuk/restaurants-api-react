import React, { Component } from 'react';
import { FaBeer } from "react-icons/fa";

class AllRestaurants extends Component {
    render() {

        return (
            <div className="mb-3 item-list" >
                {this.props.restaurants.map(item => (
                    <div key={item.id}>

                        <div className='container text-center'>
                            <FaBeer />
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