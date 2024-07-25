import React, { useEffect, useState } from "react";
import myContext from './MyContext';
import { fireDB } from "../Config/Firebaseconfig";
import { toast } from "react-toastify";
import { QuerySnapshot, Timestamp, collection, onSnapshot, orderBy, query,addDoc, setDoc, deleteDoc,doc, getDocs } from "firebase/firestore";

function MyState(props) {
    
    const [loading,setLoading] = useState(false);
    const [products , setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    })

    // Add Product Section

    const addProduct = async()=>{
        // if(products.title == null || products.price == null ||  products.imageUrl == null || products.category == null || products.description == null){
        //     return toast.error('Fill all the fields ! ')
        // }
        const productRef = collection(fireDB,"products")
        setLoading(true)
        try{
            await addDoc(productRef,products)
            toast.success("Product added to cart successfully")
            setTimeout(()=>{
                window.location.href = '/dashboard'
            },800);
            getProductData()
            closeModal()
            setLoading(false)
        } catch (error){
            console.log(error)
            setLoading(false)
        }
        setProducts("")
    }

    const [product, setProduct] = useState([]);

    const getProductData = async () =>{
        setLoading(true)
        try{
            const q = query(
                collection(fireDB,"products"),
                orderBy("time"),
            );
            const data = onSnapshot(q,(QuerySnapshot)=>{
                let productArray =[];
                QuerySnapshot.forEach((doc)=>{
                    productArray.push({...doc.data(),id: doc.id});
                });
                setProduct(productArray)
                setLoading(false);
            });
            return ()=> data;
        } catch (error){
            console.log(error)
            setLoading(false)
        }
    }

    const [order,setOrder] = useState([]);

    const getOrderData = async()=>{
        try {
            const result = await getDocs(collection(fireDB,"orders"))
            const ordersArray =[];
            result.forEach((doc)=>{
                ordersArray.push(doc.data());
            });
            setOrder(ordersArray);
            console.log(ordersArray);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getProductData();
        getOrderData();
        getUserData();
    },[])

    const edithandle =(item)=>{
        setProducts(item)
    }

    // update product
    const updateProduct = async (item) =>{
        setLoading(true)
        try{
            await setDoc(doc(fireDB,"products",products.id),products);
            toast.success("Product details updated successfully !")
            getProductData();
            setLoading(false)
            setTimeout(()=>{
                window.location.href = '/dashboard'
            },900);
        }catch(error){
            setLoading(false)
            console.log(error);
        }
        setProducts("")
    }

    const deleteProduct = async(item)=>{
        try{
            setLoading(true)
            await deleteDoc(doc(fireDB,"products",item.id));
            toast.success("product deleted successfully !")
            setLoading(false);
            getProductData()
        }catch(error){
            setLoading(false)
            console.log(error);
        }
    }
    const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
      });
      setUser(usersArray);
      console.log(usersArray)

    } catch (error) {
      console.log(error)
    }
  }

  const [searchkey,setSearchKey] = useState('');
  const [filterType,setFilterType] = useState('')
  const [filterPrice,setFilterPrice] = useState('')

    return (
        <myContext.Provider value={{
            products,setProducts,addProduct,loading,setLoading,product,edithandle,updateProduct,deleteProduct,order,user,
            searchkey,setSearchKey,filterType,setFilterType,
            filterPrice,setFilterPrice
        }}>
           {props.children}
        </myContext.Provider>
    )
}

export default MyState