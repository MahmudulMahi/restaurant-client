import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensilSpoon } from 'react-icons/fa';
import userAxiosPublic from '../../../hooks/userAxiosPublic';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
  const { register, handleSubmit,reset } = useForm()
  const axiosPublic=userAxiosPublic()
  const axiosSecure=useAxios()
  const onSubmit = async (data) => {
    console.log(data)
    // image upload
    const imageFile={image:data.image[0]}
    const res=await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        'content-type':'multipart/form-data'
      }
    })
    if(res.data.success){
      const menuItem={
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        recipe:data.recipe,
        image:res.data.data.display_url
      }
      const menures=await axiosSecure.post('/menu',menuItem)
      console.log(menures.data)
      if(menures.data.insertedId){
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data)
  }
  return (
    <div>
      <SectionTitle heading="add an Item" subHeading="What's new"></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full my-6 ">
              <div className="label">
                <span className="label-text">Recipe Name</span>

              </div>
              <input {...register("name",{required:true})}
              
                type="text" placeholder="Recipe Name" className="input input-bordered w-full " />

            </label>
          </div>

          <div className='flex gap-6'>
            <div className='w-full'>
              <label className="form-control w-full my-6 ">
                <div className="label">
                  <span className="label-text">Category</span>

                </div>
                <select defaultValue='default'  {...register("category",{required:true})}
                  className="select select-bordered w-full ">
                  <option disabled value='default'>Select a Category</option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>

              </label>
            </div>

            <div className='w-full'>
              <label className="form-control w-full my-6 ">
                <div className="label">
                  <span className="label-text">Price</span>

                </div>
                <input {...register("price",{required:true})}
                  type="text" placeholder="price" className="input input-bordered w-full " />

              </label>
            </div>

          
          </div>
          <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
                
              </div>
              <textarea  {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
             
            </label>

            <div className='form-control mt-6'>
            <input {...register("image",{required:true})} type="file" className="file-input w-full max-w-xs" />
            </div>

          <button className='btn mt-4'> Add Item <FaUtensilSpoon className='ml-4'></FaUtensilSpoon></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;