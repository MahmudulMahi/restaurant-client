
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
  const {name,image,price,recipe}=item

  const {user}=useAuth()
  const navigate=useNavigate()

  const handelAddToCart =food=>{
    if(user && user.email){
      // send database
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
         navigate('/login')
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
        <button onClick={()=> handelAddToCart(item)} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};

export default FoodCard;