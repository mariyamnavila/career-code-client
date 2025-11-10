import { use } from "react";
import { Link } from "react-router-dom";

const JobLists = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise)

    return (
        <div>
            <h2 className="text-3xl">Jobs Created By you:{jobs.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Job Deadline</th>
                            <th>Viewed Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            jobs.map((job, i) =>
                                <tr key={job._id} className="hover:bg-base-300">
                                    <th>{i + 1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td><Link to={`/applications/${job._id}`} className="btn"> {
                                        localStorage.getItem(`job_id-${job._id}`)
                                            ? localStorage.getItem(`job_id-${job._id}`)
                                            : 0
                                    } person viewed</Link></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobLists;