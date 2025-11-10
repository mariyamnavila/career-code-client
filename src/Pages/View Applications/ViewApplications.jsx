import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();
    localStorage.setItem(`job_id-${job_id}`, JSON.stringify(applications?.length))

    const handleStatusChange = (e, applicationId) => {
        console.log(applicationId);
        axios.patch(`http://localhost:3000/application/${applicationId}`, { status: e.target.value })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Application Status Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2 className="text-4xl">{applications.length} Applications for:{job_id}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>LinkedIn Link</th>
                            <th>Status</th>
                            {/* <th>Github Link</th> */}
                            {/* <th>Resume Link</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            applications.map((application, i) =>
                                <tr key={i} className="hover:bg-base-300">
                                    <th>{i + 1}</th>
                                    <td>{application.applicant}</td>
                                    <td>{application.linkedIn}</td>
                                    <td>
                                        <select onChange={(e) => {
                                            handleStatusChange(e, application._id)
                                        }} defaultValue={application.status} className="select">
                                            <option disabled={true}>Update Status</option>
                                            <option>pending</option>
                                            <option>Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                    {/* <td>{application.gitHub}</td> */}
                                    {/* <td>{application.resume}</td> */}
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;