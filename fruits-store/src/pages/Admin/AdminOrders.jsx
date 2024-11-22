import React, { useEffect, useRef, useState } from "react";
import AdminPageHeader from "../../components/Admin/AdminPageHeader";
import { Loader2, Pencil, Plus, Trash, TriangleAlert, X } from "lucide-react";
import { getOrders, deleteOrders, editOrders } from "../../api/Api";
import { toast } from "sonner";
//import BasicFruits from "../BasicFruits";
const AdminOrders = () => {
  //null -> products[] | Store the data
  const [orders, setOrders] = useState(null);
  //true (shows loading screen) -> false(hide loading screen) | Condition Render
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState(null);
  //const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const uidRef = useRef();
  const pidRef = useRef();
  const totalRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef("");
  const orderedAtRef = useRef("");
  const fetchData = async () => {
    try {
      const res = await getOrders();
      if (res.status === 200) {
        console.log(res.data);
        setOrders(res.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  //   const handleAdd = async (e) => {
  //     e.preventDefault();
  //     const basicfruits = {
  //       title: titleRef.current.value,
  //       img: imgRef.current.value,
  //       price: priceRef.current.value
  //     };
  //     console.log(basicfruits);
  //     try {
  //       const response = await addBasicFruits(basicfruits)
  //       if (response.status === 200) {
  //         console.log("Product Added");
  //         toast.success('Product Added')
  //         setShowAdd(false);
  //         fetchData();
  //       }
  //     } catch (error) {
  //       toast.error("Error while Adding")
  //       // console.error(error);
  //     }
  //   };

  const editHelper = (product) => {
    setCurrentProduct(product);
    setShowEdit(true);
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    const product = {
      pid: pidRef.current.value,
      uid: uidRef.current.value,
      total: totalRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      orderedAt: orderedAtRef.current.value,
    };
    try {
      const response = await editOrders(product, currentProduct._id);
      if (response.status === 200) {
        setShowEdit(!showEdit);
        fetchData();
        //info("Product Updated !")
      }
    } catch (error) {
      toast.error("Error while Updating");
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await deleteOrders(id);
      if (response.status === 200) {
        console.log("Order deleted");
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
          <Loader2 className="text-lime-500 h-14 w-14 animate-spin" />
        </div>
      </>
    );
  }
  if (!orders || orders.length === 0) {
    return (
      <>
        <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
          <TriangleAlert className="text-orange-400 h-12 w-12" />
          <p>No Order Available !</p>
        </div>
      </>
    );
  }
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border">
        <AdminPageHeader title="Orders" />
        {/* <button
          className="w-10 h-10 font-bold flex justify-center items-center border-2 border-green-500 rounded-md
         text-green-500 shadow-md hover:text-white hover:bg-green-500 hover:shadow-md
          hover:shadow-green-400"
          onClick={() => setShowAdd(!showAdd)}
        >
          <Plus className="w-8 h-8" />
        </button> */}
      </div>
      <table className="w-full h-full border-collapse border shadow-lg rounded-md">
        <thead className="shadow-md font-bold text-lime-500 text-left rounded-md">
          <tr>
            <th className="p-6">PID</th>
            <th className="p-6">User Id</th>
            <th className="p-6">Price</th>
            <th className="p-6">Address</th>
            <th className="p-6">Order Date</th>
            <th className="p-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((product, index) => (
            <tr key={index}>
              <td className="p-4">{product._id} </td>
              <td className="p-4">{product.pid} </td>
              <td className="p-4">{product.total}</td>
              <td className="p-4">{product.address}</td>
              <td className="p-4">{product.orderedAt}</td>
              <td className="p-4 flex h-full w-full flex-row justify-start items-center gap-4">
                <button
                  className="h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500"
                  onClick={() => {
                    editHelper(product);
                  }}
                >
                  <Pencil />
                </button>
                <button
                  className="h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500"
                  onClick={() => {
                    handleDelete(product._id);
                  }}
                >
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {showAdd && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className="h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md">
              <div className="h-full w-full flex flex-col justify-center items-center text-lg font-semibold">
                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className="w-1/2 text-left text-xl my-6 font-bold text-green-500">
                    Add Product
                  </h1>
                  <div
                    className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer"
                    onClick={() => {
                      setShowAdd(!showAdd);
                    }}
                  >
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form
                  className="h-[70%] w-[80%] flex flex-col justify-center items-center gap-8"
                  onSubmit={handleAdd}
                >
                  <input
                    ref={titleRef}
                    type="text"
                    title=""
                    id="title"
                    placeholder="Title"
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm"
                    required
                  />
                  <input
                    ref={imgRef}
                    type="text"
                    name=""
                    id="img"
                    placeholder="Image URL"
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm"
                    required
                  />
                  <input
                    ref={priceRef}
                    type="number"
                    name=""
                    id="price"
                    placeholder="Price"
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-green-400 bg-green-500 text-white rounded-sm outline-none"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}  */}
      {showEdit && (
        <>
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50 w-screen flex justify-center items-start bg-black/40">
            <div className="w-1/3 bg-white shadow-2xl rounded-md">
              <div className="w-full flex flex-col justify-center items-center text-lg font-semibold">
                <div className="w-[80%] flex flex-row justify-between items-center mt-4">
                  <h1 className="text-xl font-bold text-blue-500">
                    Edit Product
                  </h1>
                  <button
                    className="text-red-500 cursor-pointer"
                    onClick={() => setShowEdit(false)}
                  >
                    <X className="h-8 w-8 border-2 p-1 border-red-500 rounded-full hover:bg-red-500 hover:text-white" />
                  </button>
                </div>
                <form
                  className="w-[80%] h-[90%] flex flex-col justify-center items-center gap-5 mt-4"
                  onSubmit={handleEdit}>
                
                  <input
                    ref={uidRef}
                    type="number"
                    id="uid"
                    defaultValue={currentProduct.uid}
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 p-2 focus:shadow-lg focus:border-blue-400 rounded-sm"
                    required
                    autoFocus
                  />
                  <input
                    ref={pidRef}
                    type="number"
                    id="pid"
                    defaultValue={currentProduct.pid}
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 p-2 focus:shadow-lg focus:border-blue-400 rounded-sm"
                    required
                  />
                  <input
                    ref={totalRef}
                    type="number"
                    id="total"
                    defaultValue={currentProduct.total}
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 p-2 focus:shadow-lg focus:border-blue-400 rounded-sm"
                    required
                  />
                  <input
                    ref={phoneRef}
                    type="number"
                    id="phone"
                    defaultValue={currentProduct.phone}
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 p-2 focus:shadow-lg focus:border-blue-400 rounded-sm"
                    required
                  />
                  <input
                    ref={addressRef}
                    type="text"
                    id="address"
                    defaultValue={currentProduct.address}
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 p-2 focus:shadow-lg focus:border-blue-400 rounded-sm"
                    required
                  />
                  <input
                    ref={orderedAtRef}
                    type="text"
                    id="orderedAt"
                    defaultValue={currentProduct.orderedAt}
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 p-2 focus:shadow-lg focus:border-blue-400 rounded-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full h-[2rem]  shadow-lg shadow-gray-400 hover:shadow-blue-400 bg-blue-500 text-white rounded-sm outline-none"
                  >
                    
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminOrders;
