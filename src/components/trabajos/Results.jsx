import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SimpleCard } from '../common/SimpleCard';
import { SimplePagination } from './SimplePagination';

function Results({ jobs }) {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 8;

    if (!jobs || jobs.length === 0) {
        return <p>No jobs found.</p>;
    }

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    return (
        <div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                    gap: '16px',
                    justifyItems: 'center', // Centers items within their grid cell
                }}
            >
                {currentJobs.map((job) => (
                    <SimpleCard
                        key={job._id}
                        job_title={job.job_title}
                        area={job.area}
                        salario={job.salario}
                        descripcion={job.descripcion}
                    />
                ))}
            </div>

            <div style={{marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '8px'}}>
                <SimplePagination
                    active={currentPage}
                    setActive={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
}

Results.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        job_title: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        salario: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
    })).isRequired,
};

export default Results;