import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2>My Posted Jobs: { }</h2>
            <Suspense fallback={'loading'}>
                <JobLists
                    jobsCreatedByPromise={jobsCreatedByPromise(user?.email)}
                ></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;