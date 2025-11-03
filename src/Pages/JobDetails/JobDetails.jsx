import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const { _id,
        title,
        company,
    } = useLoaderData()
    return (
        <div>
            <h2>Job Details Of: {title}</h2>
            <p>Company: {company}</p>
            <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;