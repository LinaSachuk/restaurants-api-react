import React, { Component } from 'react';
import { FaBeer } from "react-icons/fa";

class AllRestaurants extends Component {
    render() {

        const isEmpty = this.props.restaurants.length === 0;
        console.log(isEmpty)

        return (
            <div className="mb-3 item-list" >
                {isEmpty ? (
                    <div>No restaurants found...</div>
                ) : " "
                }

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