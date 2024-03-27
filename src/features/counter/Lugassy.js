import React , {useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {fetchProductsAsync,selectProducts,addProductAsync, delProductAsync, updProductAsync} from './counterSlice';
const Lugassy = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    const [price, setprice] = useState(0)
    const [desc, setdesc] = useState("")
    const [refresh, setrefresh] = useState(false)
    
    useEffect(() => {
       dispatch(fetchProductsAsync())
    }, [refresh])
    const handleDelete=async(id)=>{
        await dispatch(delProductAsync(id))
        setrefresh(!refresh)

    }

    const handleUpd=async(id)=>{
        await dispatch(updProductAsync(id,price,desc))
        setrefresh(!refresh)

    }
    return (
        <div style={{backgroundColor:"wheat"}}>
            number of products:{products.length}
            {products.map(prod => <div>
                {prod.desc}
                {prod.price}
                    <button onClick={()=>handleDelete(prod.id)}>del</button>
                    <button onClick={()=>handleUpd(prod.id)}>upd</button>

                </div>)}
            desc:<input onChange={(e)=>setdesc(e.target.value)}/>
            price:<input onChange={(e)=>setprice(e.target.value)}/>
            <button onClick={()=>dispatch(addProductAsync({desc,price}))}> Add product</button> 
            






        
    </div>
  )
}

export default Lugassy