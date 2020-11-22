import React, { Component } from 'react';
import { FaBeer } from "react-icons/fa";
// import styled from 'styled-components'
// import { useTable, usePagination } from 'react-table';


class AllRestaurants extends Component {


    render() {

        const isEmpty = this.props.restaurants.length === 0;
        console.log(isEmpty)
        const data = this.props.restaurants;
        // console.log(data)
        const columns = ['Name', 'City', 'State', 'Telephone', 'Genre']
        return (
            <div className="mb-3 item-list" >
                {isEmpty ? (
                    <div>No restaurants found...</div>
                ) : " "
                }
                <table cellPadding={5} cellSpacing={5} className="table table-striped  table-responsive table-hover">
                    <thead>
                        <tr className="bg-primary">
                            {columns.map((heading, i) => <th key={i}>{heading}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>

                                {columns.map((column, i) => (
                                    <td key={i}>
                                        {item[column.toLowerCase()]}
                                    </td>
                                ))}
                            </tr>
                        ))}

                    </tbody>
                </table>




                {/* {this.props.restaurants.map(item => (
                    <div key={item.id} className='container text-center'>


                        <FaBeer />
                        <h3>Name: {item.name} | City: {item.city} | State: {item.state}  </h3>
                        <h4>Phone Number: {item.telephone} | Genre: {item.genre}</h4>

                    </div>


                ))} */}

            </div>
        )
    }
}

export default AllRestaurants;