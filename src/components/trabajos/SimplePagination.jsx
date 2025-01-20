import React from 'react';
import PropTypes from 'prop-types';

export function SimplePagination({ active, setActive, totalPages }) {
    const handleNextPage = () => {
        if (active < totalPages) {
            setActive(active + 1);
        }
    };

    const handlePreviousPage = () => {
        if (active > 1) {
            setActive(active - 1);
        }
    };

    return (
        <div>
            <button onClick={handlePreviousPage} disabled={active === 1}>
                Previous
            </button>
            <span>{active} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={active === totalPages}>
                Next
            </button>
        </div>
    );
}

SimplePagination.propTypes = {
    active: PropTypes.number.isRequired,
    setActive: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
};

export default SimplePagination;