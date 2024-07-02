import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./detail_service.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    

  return (
    <div>

        <Navbar />
        {data!=null?<>
        <div className='flex md:w-[80%]  mx-auto mt-10  '>
            <div className='w-[60%]'>
                <p className='font-semibold text-[22px] '>I Will help you to wen your Marathone</p>
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
                            <span className='font-medium'>5</span><span className='text-slate-600 ml-2 underline'>(2235) </span></div>
                    </div>

                </div>
                <div className=' w-[800px] mx-auto mt-10'>    <Carousel>
                    <div>
                        <img src="/img/img2.jpg" />
                       
                    </div>
                    <div>
                        <img src="/img/img2.jpg" />
                        
                    </div>
                    <div>
                        <img src="/img/img2.jpg" />
                       
                    </div>
                    <div>
                        <img src="/img/img2.jpg" />
                       
                    </div>
                    </Carousel>

                </div>
                <div className=' '>
                    <p className='font-semibold text-[22px] mb-5'>Ce que les gens disent de ce service  </p>
                    <Carousel>
                    <div className='border-2 p-6 mx-auto bg-gray-100 shadow-md '>
                        <div className='flex justify-start'>
                            <div className="flex items-center justify-center w-10 h-9 bg-green-500 text-white rounded-full "
                                style={{background:"lightgreen", color:"white",fontWeight:"bold"} }  >
                                AL
                            </div>
                            <div className='text-left ml-3 '>
                                <div className='font-semibold '>AmIn Rchdy</div>
                                 <div className='text-wrap hover:text-balance flex flex-wrap text-gray-600 ' style={{overflowWrap: 'anywhere'}}>wa3r akhouya waw m9wd 3jbny hadchy ya khouya wa hamid 7al tbon mo dk bab</div>
                                <div className='text-gray-400'>Il ya 1 mois </div>
                            </div>

                        </div>
                        
                    </div>
                    <div className='border-2 p-6 mx-auto  bg-gray-100 shadow-md '>
                        <div className='flex justify-start'>
                            <div className="flex items-center justify-center w-10 h-9 bg-green-500 text-white rounded-full "
                                style={{background:"lightgreen", color:"white",fontWeight:"bold"} }  >
                                AL
                            </div>
                            <div className='text-left ml-3'>
                                <div className='font-semibold '>AmIn Rchdy</div>
                                 <div className='text-wrap hover:text-balance flex flex-wrap text-gray-600 ' style={{overflowWrap: 'anywhere'}}>wa3r akhouya waw m9wd 3jbny hadchy ya khouya wa hamid 7al tbon mo dk bab</div>
                                <div className='text-gray-400'>Il ya 1 mois </div>
                            </div>

                        </div>
                        
                    </div>
                  
                   
                    
                   
                    </Carousel>
                </div>

                <div className=' mb-10'>
                    <p className='font-semibold text-[22px] mb-5'>À propos de ce concert</p>
                    <div>
                    You need a decent sports graphic design?

                    You're in the right place! I'm here to work it with you!

                    Whatever you need, just talk to me.

                    I will happy to serve you.



                    Let's make it work!



                    Angeline
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
                            <span className='font-medium'>5</span><span className='text-slate-600 ml-2 underline'>(2235) </span>
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
                    <div className='pt-1'><img src="/img/coeur.png" className='w-6 h-6 mr-2'/></div>
                    <span className='border rounded-md p-1 px-3 mr-2'>{data.likes.length}</span>
                    <div className='border rounded-md  p-1 px-3'><img src="/img/partager.png"  className='w-6 h-6 '/></div>
                </div>
                <div className='border p-5'>
                    <div className='flex justify-center border mb-10  text-black font-bold py-2 text-[18px] '> {data.prix} dh <span className='text-gray-400 ml-2 text-[12px]'> 1 mois /anné</span></div>
                <div className='text-[18px]  font-bold  mb-5'>Coaching</div>
                
                <div className='flex'>
                        <svg width="16" height="25" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>
                        <span className='ml-2 text-gray-600'>Programe d'entrainement </span>
                    </div>
                    <div className='flex'>
                        <svg width="16" height="25" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>
                        <span className='ml-2 text-gray-600'>Programe de nature </span>
                    </div>
                    <div className='flex'>
                        <svg width="16" height="25" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>
                        <span className='ml-2 text-gray-600'>Des conseilles </span>
                    </div>
                    <div className='flex'>
                        <svg width="16" height="25" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>
                        <span className='ml-2 text-gray-600'>Preparation Marathone </span>
                    </div>

                    <div className='flex justify-center border  bg-green-500 text-white font-bold py-2 mt-10 rounded-md text-[18px] '> Continue  </div>
                    

                    </div>
                    <div className="bg-slate-50 mt-5 p-6">
                    <div className='border border-green-500 text-center font-bold text-green-500 py-2 rounded-md text-[18px]'> Contact me  </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>:null}
    </div>
  );
};

export default Detail_service;

