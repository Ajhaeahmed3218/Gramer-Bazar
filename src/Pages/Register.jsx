import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";



const Register = () => {
    const {createUser, setUser,  updateProfil} = useContext(AuthContext)
    const hanldeAddUser = e => {
        e.preventDefault();
        const form = e.target   ;
        const email = form.email.value   
        const password = form.password.value   
        const name = form.name.value   
        const photo = form.photo.value
        console.log(name, photo, email, password); 


        // if (!/[A-Z]/.test(password)) {
        //     return Swal.fire({
        //         title: 'error',
        //         text: "Please include at least one uppercase letter.",
        //         icon: 'error',
        //         confirmButtonText: 'Cool'
        //       })
             
        // }

        // if (!/[a-z]/.test(password)) {
           
        //     return Swal.fire({
        //         title: 'error',
        //         text: "Please include at least one lowercase letter.",
        //         icon: 'error',
        //         confirmButtonText: 'Cool'
        //       })
        // }

        // if (password.length < 6) {
          
        //     return Swal.fire({
        //         title: 'error',
        //         text: "Password must be at least 6 characters long.",
        //         icon: 'error',
        //         confirmButtonText: 'Cool'
        //       })
        // }
        
        createUser(email, password) 
        .then((result) => {
            // Signed up 
            updateProfil(name, photo)
            setUser(result.user)
            console.log(result.user);
            return Swal.fire({
                title: 'Success',
                text: "Successfully Registerd.",
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            // ...
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
        <div className="container mx-auto">
             <Helmet>
                <title>
                    go2Trip | Register
                </title>
            </Helmet>
            <h1 className="text-4xl text-center font-bold mt-6">Register Now</h1>
            <div className="w-2/3 mx-auto">
                <form onSubmit={hanldeAddUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
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
                        <button className="btn bg-[#2596be] ">Register</button>
                    </div>
                    <p>Already have an acount ? please <Link to={"/login"} className="text-[#23BE0A] font-bold">login</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Register;