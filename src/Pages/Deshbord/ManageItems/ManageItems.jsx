import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const ManageItems = () => {
  const [menu] = useMenu()
  const axiosSecure=useAxios()

  const handleDeleteItem =  (item) => { 
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async(result) => {
      if (result.isConfirmed) {
        const res=await axiosSecure.delete(`/menu/${item._id}`)
        console.log(res.data)
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }
  return (
    <div>
      <SectionTitle heading='Manage All Items' subHeading='Hurry Up'></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {

                menu.map((item, index) => <tr key={item._id}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>

                    </div>
                  </td>
                  <td>
                    {item.name}

                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button  className="btn  btn-lg bg-orange-200">

                      <div className='text-white text-2xl'>
                        <FaEdit />
                      </div>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteItem(item)} className="btn  btn-lg bg-orange-300">

                      <div className='text-red-600'>
                        <MdDelete />
                      </div>
                    </button>
                  </td>
                </tr>)
              }
           



            </tbody>


          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;