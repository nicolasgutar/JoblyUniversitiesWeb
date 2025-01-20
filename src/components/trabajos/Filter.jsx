import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Select, Option } from '@material-tailwind/react';

function Filter({ filter, onFilterChange }) {
    const [salaryRange, setSalaryRange] = useState([0, 20]);

    const handleSearchChange = (e) => {
        onFilterChange({ search: e.target.value });
    };

    const handleCategoryChange = (value) => {
        onFilterChange({ category: value });
    };

    const handleSalaryChange = (e) => {
        const minSalary = Number(e.target.value);
        setSalaryRange([minSalary, salaryRange[1]]);
        onFilterChange({ minSalary });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', border: '1px solid #ccc', borderRadius: '4px' }}>
            <div>
                <label>
                    Search:
                    <Input
                        type="text"
                        value={filter.search}
                        onChange={handleSearchChange}
                        placeholder="Enter job title or employer..."
                        style={{ width: '100%', marginTop: '4px', padding: '8px' }}
                    />
                </label>
            </div>

            <div>
                <label>
                    Category:
                    <Select
                        value={filter.category}
                        onChange={handleCategoryChange}
                        style={{ width: '100%', marginTop: '4px', padding: '8px' }}
                    >
                        <Option value="">All</Option>
                        <Option value="Student Services">Student Services</Option>
                        <Option value="Research & Laboratory">Research & Laboratory</Option>
                        <Option value="Food & Dining">Food & Dining</Option>
                        <Option value="Technical Support">Technical Support</Option>
                        <Option value="Event & Recreational">Event & Recreational</Option>
                        <Option value="Administrative Support">Administrative Support</Option>
                    </Select>
                </label>
            </div>

            <div>
                <label>
                    Salary Range: {salaryRange[0]} - {salaryRange[1]} USD/hr
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={salaryRange[0]}
                        onChange={handleSalaryChange}
                        step="1"
                        style={{ width: '100%', marginTop: '4px', padding: '8px', background: '#003652' }}
                    />
                </label>
            </div>
        </div>
    );
}

Filter.propTypes = {
    filter: PropTypes.shape({
        search: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        minSalary: PropTypes.number.isRequired,
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;