import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
    const { user } = useAuth()


    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user?.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;