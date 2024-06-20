import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
function Likes_popup(props) {
    const [IsOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

    const closeModal = () => {
        props.setOpen(false);
    };
    
    return(<div>
             <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="w-full h-full bg-[rgba(0,0,0,.65)] pt-[148px] pb-[110px] z-[999]">
            <div className={`flex justify-center animate__animated animate__zoomIn`}>
                <div className="min-[550px]:w-[490px]  h-[480px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white overflow-y-scroll">

                    <button className='w-5 h-5 ml-[450px] mt-[6px] cursor-pointer' onClick={closeModal}>
                        <img src='/img/croix.png' alt='close icon' className='w-full h-full ' />
                    </button>

                    <div className='flex  mx-10 py-5 justify-between'>
                        <div className='flex'>
                            <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-2"
                                    style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"} }   >
                                    AY
                            </div>
                            <div className='font-semibold capitalize flex flex-col'>{JSON.parse(localStorage.getItem('user')).name}</div>
                        </div>
                        <div  className='flex  cursor-pointer justify-center py-1'> <img src="./img/like.png"className="w-5 h-5 mr-2" alt="prb" /> <span className=''>Like</span></div>
                    </div>

                    
                    <div className='flex  mx-10 py-5 justify-between'>
                        <div className='flex'>
                            <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-2"
                                    style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"} }   >
                                    AY
                            </div>
                            <div className='font-semibold capitalize flex flex-col'>{JSON.parse(localStorage.getItem('user')).name}</div>
                        </div>
                        <div  className='flex  cursor-pointer justify-center py-1'> <img src="./img/like.png"className="w-5 h-5 mr-2" alt="prb" /> <span className=''>Like</span></div>
                    </div>

                    
                    <div className='flex  mx-10 py-5 justify-between'>
                        <div className='flex'>
                            <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-2"
                                    style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"} }   >
                                    AY
                            </div>
                            <div className='font-semibold capitalize flex flex-col'>{JSON.parse(localStorage.getItem('user')).name}</div>
                        </div>
                        <div  className='flex  cursor-pointer justify-center py-1'> <img src="./img/like.png"className="w-5 h-5 mr-2" alt="prb" /> <span className=''>Like</span></div>
                    </div>
                    
                   
                   
                    
                    
                    
                </div>
            </div>
          
            </Modal>
    </div>

    )
}
export default Likes_popup;