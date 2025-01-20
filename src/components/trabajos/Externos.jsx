import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Results from './Results';
import externos from '../../data/Externos.json';

function Externos() {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState({
        search: '',
        category: '',
        minSalary: 0,
    });

    useEffect(() => {
        setJobs(externos);
    }, []);

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.job_title.toLowerCase().includes(filter.search.toLowerCase()) ||
            job.employer_name.toLowerCase().includes(filter.search.toLowerCase());

        const matchesCategory = filter.category
            ? job.area === filter.category
            : true;

        return matchesSearch && matchesCategory;
    });

    const handleFilterChange = (newFilter) => {
        setFilter({ ...filter, ...newFilter });
    };

    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/4">
                <Filter filter={filter} onFilterChange={handleFilterChange} />
            </div>
            <div className="flex-1">
                <Results jobs={filteredJobs} />
            </div>
        </div>
    );
}

export default Externos;