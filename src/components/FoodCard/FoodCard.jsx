
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import useCart from '../../hooks/useCart';

const FoodCard = ({item}) => {
  const {name,image,price,recipe,_id}=item

  const {user}=useAuth()
  const navigate=useNavigate()
  const location=useLocation()
  const axiosSecure=useAxios()
  const [,refetch]=useCart()

  const handelAddToCart =()=>{
    if(user && user.email){
      // send database
      // console.log(user.email,food)
      const cartItem={
        menuId: _id,
        email:user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts',cartItem)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    }
    else{
      Swal.fire({
        title: "you are not login",
        text: "Please login add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}})
        }
      });
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <p className=' absolute bg-slate-900 text-white right-0 mr-4 mt-4'>${price}</p>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions justify-end">
        <button onClick={ handelAddToCart} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};

export default FoodCard;