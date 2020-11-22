
import React, { Component } from 'react';

class Pagination extends Component {
    render() {

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil((this.props.totalItems / this.props.itemsPerPage)); i++) {
            pageNumbers.push(i)
        }

        return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map((number, i) => (
                        <li
                            key={i}
                            className={'page-item ' + (this.props.currentPage === number ? 'active' : '')}>
                            <a
                                onClick={() => this.props.setCurrentPage(number)}
                                href="!#"
                                className='page-link '
                            >
                                {number}

                            </a>
                        </li>

                    ))}
                </ul>
            </nav>



        );
    }
}
export default Pagination;
