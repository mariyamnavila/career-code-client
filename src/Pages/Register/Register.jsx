import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import registerLottie from '../../assets/lotties/register.json';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
    }

    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{width:'200px'}} animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <div>
                        <p className="font-medium text-xs text-center mb-3 text-secondary">Register </p>
                        <h2 className="font-semibold text-3xl text-center mx-5 text-">Start for from Today</h2>
                        <form
                            onSubmit={handleRegister}
                            className="card-body">
                            {/* <button onClick={() => { handleGoogleSignIn(googleProvider) }} className="btn w-full bg-success text-primary flex items-center"><FcGoogle />  Login with Google</button> */}
                            {/* <div className="divider text-xs">Or continue with </div> */}
                            <fieldset className="fieldset">
                                {/* Name */}
                                {/* <label className="label font-bold text-base-200">Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    className="input border-none focus:outline-1 focus:outline-primary"
                                    placeholder="Enter your name"
                                    required
                                /> */}
                                {/* {
                            nameError && <p className='text-xs text-accent'>{nameError}</p>
                        } */}
                                {/* email */}
                                <label className="label font-bold text-base-200">Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    className="input border-none focus:outline-1 focus:outline-primary"
                                    placeholder="Enter your email address"
                                    required
                                />
                                {/* photo url */}
                                {/* <label className="label font-bold text-base-200 ">Photo URL</label>
                                <input
                                    name='photo'
                                    type="text"
                                    className="input border-none focus:outline-1 focus:outline-primary"
                                    placeholder="Enter your photo URL"
                                    required
                                /> */}
                                {/* password */}
                                <label className="label font-bold text-base-200">Password</label>
                                <input
                                    name='password'
                                    type="password"
                                    className="input border-none focus:outline-1 focus:outline-primary"
                                    placeholder="Enter your password"
                                    required
                                />
                                {/* {
                                error && <p className="text-red-500 text-xs">{error}</p>
                            } */}
                                <button className="btn btn-primary text-white mr-2 mt-3" type="submit">Register</button>
                                <p className="font-semibold text-center pt-4">Already Have An Account ? <Link to={'/login'} className="text-primary">Login</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;