import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
// import { useAuth } from '../../hooks/useAuth';

const JobApply = () => {
    const { id: jobId } = useParams()
    const { user } = useAuth()
    const handleApplyFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form);
        const { linkedIn, gitHub, resume } = Object.fromEntries(formData.entries());
        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            gitHub,
            resume,
        }

        axios.post('http://localhost:3000/applications', application)
            .then((res) => {
                console.log(res.data);
                if (res?.data?.insertedId) {
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <h3 className="text-4xl">Apply for this job :<Link to={`/jobs/${jobId}`}>Details</Link></h3>
            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border w-xs p-4">
                    <legend className="fieldset-legend">LinkedIn Link</legend>

                    <label className="label">Title</label>
                    <input type="url" name="linkedIn" className="input" placeholder="LinkedIn Profile Link" />

                    <label className="label">GitHub Link</label>
                    <input type="url" name="gitHub" className="input" placeholder="GitHub Link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name="resume" className="input" placeholder="Resume Link" />
                    <input type="submit" className="btn" value={'Apply Now'} />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;