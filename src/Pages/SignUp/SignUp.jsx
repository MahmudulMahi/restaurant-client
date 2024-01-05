
import { useForm } from 'react-hook-form';


const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  console.log(watch("example"))
  return (
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
              <button className="btn btn-primary">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;