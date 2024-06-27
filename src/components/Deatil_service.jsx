import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Detail_service = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex md:w-[80%]  mx-auto mt-10  '>
            <div className='w-[60%]'>
                <p className='font-semibold text-[22px] '>I Will help you to wen your Marathone</p>
                <div className='flex mt-5 border-b'>
                    <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full "
                    style={{background:"lightgreen", color:"white",fontWeight:"bold"} }   id="dropdownToggle">
                        AO
                    </div>
                    <div className='mb-5'>
                        <div className='ml-5 font-medium text-[17px]'>Ayoub Oubakki</div>
                        <div className='ml-5 '> 
                            <i className="fas fa-star text-black-500 mr-1"></i>
                            <span className='font-medium'>5</span><span className='text-slate-600 ml-2 underline'>(2235) </span></div>
                    </div>

                </div>
                <div className='h-[400px]'> images</div>
                <div className='h-[400px]'>About this gig </div>
                <div className='font-semibold text-[22px] '>Faites connaissance avec <span>Ayoub Oubakki</span></div>
                <div className='flex mt-5'>
                    <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full "
                    style={{background:"lightgreen", color:"white",fontWeight:"bold"} }   id="dropdownToggle">
                        AO
                    </div>
                    <div className='mb-5'>
                        <div className='ml-5 font-medium text-[17px]'>Ayoub Oubakki</div>
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
                                <div className=' ml-4 text-gray-600'>2018</div>
                            </div>
                        </div>
                        
                        </div>
                        
                    </div>
                    <div className='text-wrap hover:text-balance flex flex-wrap my-5' style={{overflowWrap: 'anywhere'}}>
                        Je suis un artiste indépendant. Réalisera vos graphismes sportifs et tous types d'annonces photo. Pour toute demande ou projet, envoyez-moi un message ou un e-mail. Embauchez-moi maintenant !
                    </div>
                    <div className='font-semibold text-gray-400'> 
                        <div >Skills :</div>
                        <div className='mt-3 ml-2 flex flex-wrap'>
                            <span className='p-2 border rounded-xl mx-2 mb-2'> Coaching </span>
                            <span className='p-2 border rounded-xl mx-2 mb-2'> Coaching </span>
                           
                        </div>
                    </div>
                    <div className='font-semibold text-gray-400'> 
                        <div >Certifications :</div>
                        <div className='mt-3 ml-2 flex flex-wrap'>
                            <span className='p-2 border rounded-xl mx-2 mb-2'> Coaching </span>
                            <span className='p-2 border rounded-xl mx-2 mb-2'> Coaching </span>
                           
                        </div>
                    </div>
                    <div className='font-semibold text-gray-400'> 
                        <div >Educations :</div>
                        <div className='mt-3 ml-2 flex flex-wrap'>
                            <span className='p-2 border rounded-xl mx-2 mb-2'> Coaching </span>
                            <span className='p-2 border rounded-xl mx-2 mb-2'> Coaching </span>
                           
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-[40%] ml-[5%] relative '>
                <div className='fixed w-[30%]'>
                <div className='flex justify-end mb-2'> 
                    <div className='pt-1'><img src="./img/coeur.png" className='w-6 h-6 mr-2'/></div>
                    <span className='border rounded-md p-1 px-3 mr-2'>1333</span>
                    <div className='border rounded-md  p-1 px-3'><img src="./img/partager.png"  className='w-6 h-6 '/></div>
                </div>
                <div className='border p-5'>
                    <div className='flex justify-center border mb-10  text-black font-bold py-2 text-[18px] '> 150 dh <span className='text-gray-400 ml-2 text-[12px]'> 1 mois /anné</span></div>
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
    </div>
  );
};

export default Detail_service;

