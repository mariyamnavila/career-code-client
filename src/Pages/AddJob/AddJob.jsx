import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const AddJob = () => {

    const { user } = useAuth()

    const handleAddAJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        newJob.requirements = newJob.requirements.split(',').map(req => req.trim())
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())

        newJob.status = 'active'

        axios.post('http://localhost:3000/jobs', newJob)
            .then((res) => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "This New Job has been saved and published",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Please Add a Job</h2>
            <form onSubmit={handleAddAJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name="title" className="input w-full" placeholder="Your Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name="company" className="input w-full" placeholder="Your Company name" />

                    <label className="label">Location</label>
                    <input type="text" name="location" className="input w-full" placeholder="Your Company Location " />

                    <label className="label">Company Logo</label>
                    <input type="text" name="company_logo" className="input w-full" placeholder="Your Company Logo URL" />

                </fieldset>

                {/* Job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">

                    <label className="label">Job Type</label>
                    <div className="filter w-full">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" value={"On-Site"} aria-label="On-Site" />
                        <input className="btn" type="radio" name="jobType" value={"Full-Time"} aria-label="Full-Time" />
                        <input className="btn" type="radio" name="jobType" value={'Remote'} aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" value={'Hybrid'} aria-label="Hybrid" />
                    </div>

                </fieldset>
                {/* job Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" name="category" className="select w-full">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Software & IT</option>
                    </select>

                </fieldset>
                {/* Application DeadLine */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Application DeadLine</legend>
                    <input type="date" name="applicationDeadline" className="input w-full" />
                </fieldset>
                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="label"> Minimum Salary</label>
                            <input type="text" name="min" className="input w-full" placeholder="Your Job Minimum Salary" />
                        </div>
                        <div>
                            <label className="label"> Maximum Salary</label>
                            <input type="text" name="max" className="input w-full" placeholder="Your Job Maximum Salary" />
                        </div>
                        <div className="flex-col flex">
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" name="currency" className="select">
                                <option disabled={true}>Select a Currency</option>
                                <option>bdt</option>
                                <option>usd</option>
                                <option>eu</option>
                            </select>
                        </div>
                    </div>

                </fieldset>
                {/* Your Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend"> Job Description</legend>
                    <textarea className="textarea w-full" name="description" placeholder="Your Job Description"></textarea>
                </fieldset>

                {/* Your Job Requirement */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend"> Job Requirement</legend>
                    <textarea className="textarea w-full" name="requirements" placeholder="Your Job Requirement (separated by comma)" ></textarea>
                </fieldset>
                {/* Your Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend"> Job Responsibilities</legend>
                    <textarea className="textarea w-full" name="responsibilities" placeholder="Your Job Responsibilities (separated by comma)" ></textarea>
                </fieldset>
                {/* HR Related */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name="hr_name" className="input w-full" placeholder="Your Company HR Name" />

                    <label className="label"> Hr Email</label>
                    <input type="text" name="hr_email" className="input w-full" defaultValue={user?.email} placeholder="Your Company Hr Email " />

                </fieldset>

                <input type="submit" className="btn" value={'Add Job'} />

            </form>
        </div>
    );
};

export default AddJob;