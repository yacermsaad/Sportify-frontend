import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./detail_service.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Login from './login/Login';

import { formatDistanceToNow } from 'date-fns';
import Order_confirmation from '../components/order_confirmation';



const formatDate = (datetime) => {
    const date = new Date(datetime);
    return date.toISOString().split('T')[0];
  };

const Detail_service = () => {
    const [data, setdata] = useState(null); 
    const [isopen, setisopen] = useState(false); 
    const [dore, setdore] = useState(false); 
    const [isModalOpenLogin,setisModalOpenLogin]=useState(false)

    const {id} = useParams();
    const closeModal = () => {
        setisModalOpenLogin(false);
        setisopen(false)
      };
      const user=JSON.parse(localStorage.getItem('user'))
    const fetchData = async () => {
        if (id) {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/service/${id}`);
            setdata(response.data);
            response.data.likes.map((lik)=>{
                if(user!=undefined){
                    if(lik.user_id==user.id){
                        setdore(true)
                    }
                }
            })
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };
      useEffect(() => {fetchData()},[id])

      const Add_like = async () => {
        const user=JSON.parse(localStorage.getItem('user'))
        if (id && user!=undefined) {
            const id_user=user.id
           
          try {
            const response = await axios.post(`http://127.0.0.1:8000/api/service_like/${id}`,{ id_user });
           if(response.data.message=="Like deleted"){
            setdore(false)
           }else{
            setdore(true)
           }
            fetchData()
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };
      
      const calculateTimeAgo = (timestamp) => {
        let result = formatDistanceToNow(new Date(timestamp), { addSuffix: false });
        result = result.replace('about', 'Environ'); // Replace "about" with "environ"
        return result;
      };
      const calculatestare = () => {
        if (!data.comments || data.comments.length === 0) {
            return 0; // or return null or any default value if there are no comments
        }
        
        const somme = data.comments.reduce((acc, com) => acc + com.nb_start, 0);
        return somme / data.comments.length;

      };
      const order_conf=()=>{
        const user=JSON.parse(localStorage.getItem('user'))
        if(user!=undefined){
            if(user.id!=data.coach.user_id){
                setisopen(true);
            }
            
        }
      }

      const handleSubmitComment = async (e) => {
        e.preventDefault();
      
        // Retrieve user_id from local storage
        const user_id = localStorage.getItem('user_id');
      
        try {
          const response = await axios.post(`http://127.0.0.1:8000/api/addcoment`, {
            user_id: user_id,
            service_id: id,
            contenu: newComment.contenu,
            nb_start: newComment.nb_start,
          });
      
          // Assuming response.data.comment contains the new comment object
          const newCommentData = response.data.comment;
      
          // Update the comments state with the new comment
          setdata((prevData) => ({
            ...prevData,
            comments: [...prevData.comments, newCommentData],
          }));
      
          // Reset the newComment state
          setNewComment({
            contenu: '',
            nb_start: 0,
          });
      
          console.log('Comment added successfully:', newCommentData);
        } catch (error) {
          console.error('Error adding comment:', error);
          // Handle error state or display error message to user
        }
      };
      
      
    
  return (
    <div>

        <Navbar />
        {data!=null?<>
            <Login isOpen={isModalOpenLogin} setOpen={closeModal} blog="true"/>
        <div className='flex md:w-[80%]  mx-auto mt-10  '>
            <div className='w-[60%]'>
                <p className='font-semibold text-[22px] '>{data.titre}</p>
                <div className='flex mt-5 border-b'>
                {data.coach.image === 'null' ?
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mr-4"
                    style={{ background: "lightgreen", color: "white", marginLeft: "-20px", fontWeight: "bold" }} id="dropdownToggle">
                    {data.coach.fullname.slice(0, 2).toUpperCase()}
                  </div> :
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-full mr-4">
                    <img src={`http://localhost:8000/storage/${data.coach.image}`} alt="User Avatar" />
                  </div>
                }
                    <div className='mb-5'>
                        <div className='ml-5 font-semibold capitalize text-[17px]'>{data.coach.fullname}</div>
                        <div className='ml-5 '> 
                            <i className="fas fa-star text-black-500 mr-1"></i>
                            <span className='font-medium'>{calculatestare()}</span><span className='text-slate-600 ml-2 underline'>({data.orders.length}) </span></div>
                    </div>

                </div>
                <div className=' w-[800px]  mx-auto mt-10'>    <Carousel>
                    {data.images.map((im,i)=>{
                        return( <div key={i} className='h-[500px]'>
                            <img src={`http://localhost:8000/storage/${im.image}`}  />
                           
                        </div>)
                    })}
                   
                   
                    </Carousel>

                </div>
                <div className=''>
                    {data.comments.length>0?<>
                    <p className='font-semibold text-[22px] mb-5'>Ce que les gens disent de ce service  </p>
                    <Carousel>
                        {data.comments.map((com,i)=>{
                            return(  <div className='border-2 p-6 mx-auto bg-gray-100 shadow-md ' key={i}>
                                <div className='flex justify-start'>
                                    {com.user.image==null?
                                    <div className="flex items-center justify-center w-10 h-9 bg-green-500 text-white rounded-full "
                                        style={{background:"lightgreen", color:"white",fontWeight:"bold"} }  >
                                      {com.user.name.slice(0, 2).toUpperCase()}
                                    </div>:
                                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full mr-4">
                                    <img src={`http://localhost:8000/storage/${com.user.image}`} alt="User Avatar" />
                                  </div>
                                    }
                                    <div className='text-left ml-3 '>
                                        <div className='font-semibold '>{com.user.name}</div>
                                        <div className='text-wrap hover:text-balance flex flex-wrap text-gray-600 ' style={{overflowWrap: 'anywhere'}}>{com.contenu}</div>
                                        <div className='text-gray-400'>{calculateTimeAgo(com.created_at)} </div>
                                    </div>
                                </div>
                                
                            </div>
                            )
                        })}
                    </Carousel></>:null}
                </div>

                <div className=' mb-10'>
                    <p className='font-semibold text-[22px] mb-5'>À propos de ce concert</p>
                    <div>
                  {data.description}
                    </div>
                </div>
                <div className='font-semibold text-[22px] '>Faites connaissance avec <span className='font-semibold capitalize'>{data.coach.fullname}</span></div>
                <div className='flex mt-5'>
                {data.coach.image === 'null' ?
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mr-4"
                    style={{ background: "lightgreen", color: "white", marginLeft: "-20px", fontWeight: "bold" }} id="dropdownToggle">
                    {data.coach.fullname.slice(0, 2).toUpperCase()}
                  </div> :
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-full mr-4">
                    <img src={`http://localhost:8000/storage/${data.coach.image}`} alt="User Avatar" />
                  </div>
                }
                    <div className='mb-5'>
                        <div className='ml-5 font-semibold text-[17px] capitalize '>{data.coach.fullname}</div>
                        <div className='ml-5 '> 
                            <i className="fas fa-star text-black-500 mr-1"></i>
                            <span className='font-medium'>{calculatestare()}</span><span className='text-slate-600 ml-2 underline'>({data.orders.length}) </span>
                        </div>
                    </div>
                </div>
                <div className='border p-5'>
                    <div className='border-b'><div className=' md:w-[80%]'>
                        <div className='flex justify-between font-semibold'>
                            <div >
                                <div className='text-gray-400'>De</div>
                                <div className=' ml-4 text-gray-600'>Maroc</div>
                            </div>
                            <div>
                                <div className='text-gray-400'>Derniére Commande</div>
                                <div className=' ml-4 text-gray-600'> {data.orders.length>0?calculateTimeAgo(data.orders[0].created_at): "1 jour"}</div>
                            </div>
                        </div>
                        <div className='flex justify-between mt-10 mb-8 font-semibold ' >
                            <div>
                                <div className='text-gray-400'>Langues</div>
                                <div className=' ml-4 text-gray-600'>Arabe,France,Englais</div>
                            </div>
                            <div>
                                <div className='text-gray-400'>Membre Depuis</div>
                                <div className=' ml-4 text-gray-600'>{formatDate(data.coach.created_at)}</div>
                            </div>
                        </div>
                        
                        </div>
                        
                    </div>
                    <div className='text-wrap hover:text-balance flex flex-wrap my-5' style={{overflowWrap: 'anywhere'}}>
                        {data.coach.description}
                 </div>
                    <div className='font-semibold text-gray-400'> 
                        <div >Skills :</div>
                        <div className='mt-3 ml-2 flex flex-wrap'>
                            {data.coach.skills.map((skl,i)=>{
                                return  <span className='p-2 border rounded-xl mx-2 mb-2' key={i}>{skl.label} </span>
                            })}
                           
                        </div>
                    </div>
                    <div className='font-semibold text-gray-400'> 
                        <div >Certifications :</div>
                        <div className='mt-3 ml-2 flex flex-wrap'>
                        {data.coach.certificats.map((crt,i)=>{
                                return  <span className='p-2 border rounded-xl mx-2 mb-2' key={i}>{crt.label} </span>
                            })}
                           
                        </div>
                    </div>
                    <div className='font-semibold text-gray-400'> 
                        <div >Educations :</div>
                        <div className='mt-3 ml-2 flex flex-wrap'>
                        {data.coach.educations.map((sdc,i)=>{
                                return  <span className='p-2 border rounded-xl mx-2 mb-2' key={i}>{sdc.label} </span>
                            })}
                           
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-[40%] ml-[5%] relative '>
                <div className='fixed w-[30%] '>
                <div className='flex justify-end mb-2'> 
                    <div className='pt-1'>  <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-[30px] h-[30px] left-[76%] top-0 cursor-pointer" onClick={() => {JSON.parse(localStorage.getItem('user'))!=undefined?Add_like():setisModalOpenLogin(true)}}
                       fill={dore ? "red" : "none"} viewBox="0 0 24 24" stroke={dore ? "red" : "gray"} enableBackground="" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg></div>
                    <span className='border rounded-md p-1 px-3 mr-2'>{data.likes.length}</span>
                    <div className='border rounded-md  p-1 px-3'><img src="/img/partager.png"  className='w-6 h-6 '/></div>
                </div>


             <div className='border p-5'>
  <div className='flex justify-center border mb-10 text-black font-bold py-2 text-[18px]'>
    {data.prix} dh <span className='text-gray-400 ml-2 text-[12px]'> 1 mois /anné</span>
  </div>
  <div className='text-[18px] font-bold mb-5'>Coaching</div>

  {/* Displaying programmes */}
  {data.programmes.map(programme => (
    <div key={programme.id} className='flex'>
      <svg width="16" height="25" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
      </svg>
      <span className='ml-2 text-gray-600'>{programme.label}</span>
    </div>
  ))}

  <Order_confirmation isOpen={isopen} setOpen={closeModal} id={id} />
  <div className='flex justify-center border bg-green-500 text-white font-bold py-2 mt-10 rounded-md text-[18px] cursor-pointer' onClick={() => { order_conf() }}> Continue </div>
</div>





                    <div className="bg-slate-50 mt-5 p-6">
                    <div className='border border-green-500 text-center font-bold text-green-500 py-2 rounded-md text-[18px]'> Contact me  </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10' style={{marginLeft:"160px"}}>
        <p className='font-semibold text-2xl mb-5'>Ajouter un commentaire</p>
        <form onSubmit={handleSubmitComment} className='max-w-lg mx-auto' style={{marginLeft:"-10px"}}>
          <div className='mb-4'>
            <textarea
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500'
              rows='4'
              placeholder='Votre commentaire'
              required
            ></textarea>
          </div>
          <div className='flex items-center mb-4'>
            <input
              type='number'
              min='1'
              max='5'
              className='w-16 px-3 py-2 mr-2 border rounded-md focus:outline-none focus:border-indigo-500'
              placeholder='Note'
              required
            />
            <button
              type='submit'
              className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700'
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
      
        <Footer/>
        </>:null}
    </div>
  );
};

export default Detail_service;

