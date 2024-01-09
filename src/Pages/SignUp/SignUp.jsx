
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import userAxiosPublic from '../../hooks/userAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const SignUp = () => {
  const axiosPublic=userAxiosPublic()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const {createuser,updateUserProfile}=useContext(AuthContext)

  const navigate=useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    createuser(data.email,data.password)
    .then(result =>{
      const loggedUser=result.user
      console.log(loggedUser)
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        console.log('user profile update')
        const userInfo={
          name:data.name,
          email:data.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log("useroiiiii")
            reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "user created successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          }
        })
       
      })
      .catch(error=>console.log(error))
    })
  }
  console.log(watch("example"))
  return (
   <>
   <Helmet>
        <title>Restaurant | Sign Up</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">signup</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="text" {...register("photoURL", { required: true })} placeholder="photo" className="input input-bordered" />
              {errors.photoURL && <span>Photo Url is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", {
                required: true, maxLength: 20,
                minLength: 6,
                pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
              })} name="password" placeholder="password" className="input input-bordered" />
              {errors.password?.type === "required" && (
                <p className='text-red-600'>password is requirec</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className='text-red-600'>password mustbe 6 char</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className='text-red-600'>password less then 20 char</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className='text-red-600'>password must be one upercase one lower case one spacial characters</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
              {/* <button className="btn btn-primary">Sign Up</button> */}
            </div>
          </form>
          <p><small>Already have an account <Link to="/login"> Log In</Link></small></p>
          <div className="divider"></div>
        <div className='p-8'>
        <SocialLogin ></SocialLogin>
        </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;