import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./detail_service.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';


const formatDate = (datetime) => {
    const date = new Date(datetime);
    return date.toISOString().split('T')[0];
  };

const Detail_service = () => {
    const [data, setdata] = useState(null); 
    const {id} = useParams();
    console.log(id);
    // const getdata=()=>{
    //     axios.get('http://localhost:8000//api/service/')
    //     .then(response => {
    //         setdata(response.data.blogs)
    //     })
    //     .catch(error => {
    //         console.error('There was an error uploading the image!', error);
            
    //     });
    //   }
    const fetchData = async () => {
        if (id) {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/service/${id}`);
            setdata(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };
    
      useEffect(() => {fetchData()},[id])
      
      console.log(data)
      const calculateTimeAgo = (timestamp) => {
        return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
      };
      const calculatestare = () => {
        if (!data.comments || data.comments.length === 0) {
            return 0; // or return null or any default value if there are no comments
        }
        
        const somme = data.comments.reduce((acc, com) => acc + com.nb_start, 0);
        return somme / data.comments.length;

      };
      const handleLike = async () => {
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/services/${id}/like`);
            setIsLiked(!isLiked);
            setdata(response.data.service);
        } catch (error) {
            console.error('Error liking/unliking the service:', error);
        }
    };
    const [newComment, setNewComment] = useState({
        contenu: '',
        nb_start: 0, // Assuming nb_start is the rating or stars
      });

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
                <div className=' w-[800px] mx-auto mt-10'>    <Carousel>
                    {data.images.map((im,i)=>{
                        return( <div key={i}>
                            <img src={`http://localhost:8000/storage/${im.image}`} />
                           
                        </div>)
                    })}
                   
                   
                    </Carousel>

                </div>
                <div className=' '>
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
                  
                  
                   
                    
                   
                    </Carousel>
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
                                <div className=' ml-4 text-gray-600'>Environ 3 heures</div>
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
                    <div className='pt-1' onClick={handleLike}><img src="/img/coeur.png" className='w-6 h-6 mr-2'/></div>
                    <span className='border rounded-md p-1 px-3 mr-2'>{data.likes.length}</span>
                    <div className='border rounded-md  p-1 px-3'><img src="/img/partager.png"  className='w-6 h-6 '/></div>
                </div>
                <div className='border p-5'>
                    <div className='flex justify-center border mb-10  text-black font-bold py-2 text-[18px] '> {data.prix} dh <span className='text-gray-400 ml-2 text-[12px]'> 1 mois /anné</span></div>
                <div className='text-[18px]  font-bold  mb-5'>Coaching</div>
                
               {/* Programmes */}
               {data.programmes.length > 0 && (
                <div className="mb-5">
                  <div className="text-lg font-bold mb-2">Programmes</div>
                  <ul className="list-disc list-inside text-gray-600">
                    {data.programmes.map((programme) => (
                      <li key={programme.id} className="flex items-center mb-2">
                        <span className="inline-block h-5 w-5 bg-green-500 text-white rounded-full flex-shrink-0 mr-2 flex items-center justify-center">
                          {/* Check mark icon */}
                          <svg className="h-3 w-3 fill-white" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        </span>
                        <p>{programme.label}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
                    <div className='flex justify-center border  bg-green-500 text-white font-bold py-2 mt-10 rounded-md text-[18px] '> Continue  </div>
                    

                    </div>
                    <div className="bg-slate-50 mt-5 p-6">
                    <div className='border border-green-500 text-center font-bold text-green-500 py-2 rounded-md text-[18px]'> Contact me  </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10'>
        <p className='font-semibold text-[22px] mb-5'>Ajouter un commentaire</p>
        <form onSubmit={handleSubmitComment}>
          <div className='flex items-center mb-4'>
            <textarea
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500'
              rows='4'
              placeholder='Votre commentaire'
              value={newComment.contenu}
              onChange={(e) =>
                setNewComment((prevComment) => ({
                  ...prevComment,
                  contenu: e.target.value,
                }))
              }
              required
            ></textarea>
          </div>
          <div className='flex items-center'>
            <input
              type='number'
              min='1'
              max='5'
              className='w-16 px-3 py-2 mr-2 border rounded-md focus:outline-none focus:border-indigo-500'
              placeholder='Note'
              value={newComment.nb_start}
              onChange={(e) =>
                setNewComment((prevComment) => ({
                  ...prevComment,
                  nb_start: parseInt(e.target.value),
                }))
              }
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

