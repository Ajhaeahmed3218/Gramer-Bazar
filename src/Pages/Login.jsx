import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";




const Login = () => {
    const { login, googleLogin, githubLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    console.log('location in login page',location);

    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        login(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/')
                
                return Swal.fire({
                    title: 'Success',
                    text: "Successfully Login.",
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }
                
            )
                
            })

            .catch((error) => {
                console.error(error);
                return Swal.fire({
                    title: 'error',
                    text: (error.message),
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(location?.state ? location.state : '/')
                return Swal.fire({
                    title: 'Success',
                    text: "Successfully Login With Google.",
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch((error) => {
                console.error(error);
                return Swal.fire({
                    title: 'error',
                    text: (error.message),
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                navigate(location?.state ? location.state : '/')
                return Swal.fire({
                    title: 'Success',
                    text: "Successfully Login With GitHub.",
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch((error) => {
                console.error(error);
                return Swal.fire({
                    title: 'error',
                    text: (error.message),
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    return (
        <div className="md:w-2/5 mx-auto border-2 mt-20 mb-32  p-10 rounded-xl">
            <h1 className="text-4xl text-center font-bold p-12">Login</h1>
            <div className=" ">
                <form onSubmit={handleSignin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="lg:flex lg:space-y-0 space-y-4 lg:p-10">
                        <button onClick={handleGoogleLogin} className="btn border-blue-400 mr-6  lg:w-1/2"><span className="text-xl text-blue-500"><FaGoogle /></span> Google</button>
                        <button onClick={handleGithubLogin} className="btn border-blue-400 mr-6 lg:w-1/2"><span className="text-xl "><FaGithub /></span> Github</button>
                    </div>
                    <p>You do not have any acount ? please <Link to={"/register"} className="text-[#23BE0A] font-bold">Register</Link></p>
                </form>
                
            </div>
        </div>
    );
};

export default Login;



