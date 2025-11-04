import { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise)
    return (
        <div>
            <h3 className="text-3xl">My Applications:{applications.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th className="col-span-2"><div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">Company</div>
                                    <div className="text-sm opacity-50">Title</div>
                                </div>
                            </div></th>
                            <th>GitHub</th>
                            <th>linkedIn</th>
                            <th>Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, i) => <JobApplicationRow key={application._id} i={i} application={application}> </JobApplicationRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;