import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
Modal.setAppElement('#root');
function Sup_Blog_popup(props) {
    const [IsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

    const closeModal = () => {
        props.setOpen(false);
    };

    function sup_blog(){
        const formData = new FormData();
            formData.append('blog_id', props.blog.id);
            axios.post('http://localhost:8000/api/sup_blog',formData)
            .then(response => {
                if(props.fetch!="false"){
                    props.fetchData();
                }
                console.log(response.data);
                closeModal();
                props.getdata();
                if(props.fetch!="false"){
                    props.fetchData();
                }
               
            })
            .catch(error => {
                console.error('There was an error uploading the image!', error);
            });
        
    }
 
    
    return(<div>
             <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="w-full h-full bg-[rgba(0,0,0,.65)] pt-[148px] pb-[110px] z-[999]">
            <div className={`flex justify-center animate__animated animate__zoomIn`}>
                <div className="min-[550px]:w-[490px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white shadow-md">
                    <button className='w-5 h-5 ml-[450px] cursor-pointer mt-2' onClick={closeModal}>
                        <img src='/img/croix.png' alt='close icon' className='w-full h-full ' />
                    </button>
                    <p className='text-center'>Vous voulez vraiment suprimer se blog</p>
                    <div className='flex justify-center mt-10'>
                        
                      
                        <button className="bg-green-500 mb-5  text-white  text-sm font-bold py-2 px-5 border border-green-500 rounded mr-5  "
                         onClick={sup_blog}>
                            Oui
                        </button >
                        <button className=" bg-red-500 mb-5  text-white  text-sm font-bold py-2 px-5 border border-red-500 rounded  "
                        onClick={closeModal}>
                            Non
                        </button>
                    </div> 
                </div>
            </div>
          
            </Modal>
    </div>

    )
}
export default Sup_Blog_popup;