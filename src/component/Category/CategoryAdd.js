import React from 'react';
import { useState } from 'react';
// my import
import { categoryAdd } from '../../api/category';

const initialCategory ={
    title:'',
    description:''
}

const categoryError ={
    title:'',
    message:''
}

const CategoryAdd = () => {
    const [addCategory , setCategory] = useState(initialCategory)
    const [error ,setError]=useState(categoryError)
    const [loading, setLoading]= useState(false)
    const [success, setSuccess]= useState(false)
    const handleChange =(e)=>{  
       setCategory((prev)=>({...prev, [e.target.name]:e.target.value}))
    }
    console.log(addCategory)
const handleForm =async(e)=>{
    e.preventDefault();
    setLoading(true)
    let tempError={}
     if(!addCategory?.title){
        setError((perv)=>({...perv ,title:'title is required'}))
        tempError ={...tempError , title:'title is required'}
     }else{
        setError((perv)=>({...perv ,title:''}))
        tempError ={...tempError , title:''} 
     }
     if(!tempError?.title){
        try{
        const{data ,status} =await categoryAdd(addCategory)
        console.log(data, status)
        if(status === 201){

            // setSuccess('category add successfully')
            setSuccess(data?.success)
            setCategory(initialCategory)
            setTimeout(() => {
              setSuccess('')  
            },2000);
        }
        }
        catch(error){
            console.log(error)
          console.log(error?.response?.data?.title)
          setError((perv)=>({...perv , title:error?.response?.data?.title}))
          setLoading(false)
        }
        setLoading(false)
     
     }

}

    return (
        <section className="mt-24">
        <div className="container mx-auto">
            <div class="w-[700px] mx-auto">
                <h2 className=" text-center text-[green] text-2xl">ADD Category</h2>
                 {
                    success? (
                        <p className="pt-5 pb-5 text-center text-[green]">{success}</p>
                    ):null
                 }
               
                <form onSubmit={handleForm} >
                   <div className="mt-3">
                        <label class="">
                            <span className="text-[green]">title</span>
                        </label>
                        <input className=' w-full border   mt-3 p-1'
                         type="text" 
                         name="title" 
                         placeholder='title' 
                         onChange={handleChange}
                         value={addCategory?.title}
                         />
                        {
                            error?.title ?
                            <p style={{color:'red'}}>{error?.title}</p>
                            :
                            ''   
                        }
                    </div>
                   <div className="mt-3">
                        <label class="">
                            <span className="text-[green]">description</span>
                        </label>
                        <textarea className=' w-full border   mt-3 p-1' 
                        placeholder='description'
                        name="description"
                        onChange={handleChange}
                        value={addCategory?.description}
                        ></textarea>
                    </div>
                    <button className='btn w-full text-[white]
                     pt-2 pb-2 bg-[green] mt-5'
                     type="submit"
                    disabled={loading}
                      >{loading?'saving....':'save'}</button>
                </form>
            </div>
        </div>
      
    </section>
    );
};

export default CategoryAdd;