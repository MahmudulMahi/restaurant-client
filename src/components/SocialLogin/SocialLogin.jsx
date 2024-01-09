
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import userAxiosPublic from '../../hooks/userAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const {googleSignIn}=useAuth()
  const axiosPublic=userAxiosPublic()
  const navigate=useNavigate()

  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(result =>{
      console.log(result.user)
      const userInfo={
        email:result.user?.email,
        name:result.user?.displayName
      }
      axiosPublic.post('/users',userInfo)
      .then(res =>{
        console.log(res.data)
        navigate('/')
      })
    })
  }
  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn} className='btn'>
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;