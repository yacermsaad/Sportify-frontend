import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
Modal.setAppElement('#root');
function Mod_Blog_popup(props) {
    const [IsOpen, setIsOpen] = useState(false);
    const [image,setimage]=useState("");
    const [context,setcontext]=useState("");

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

    const closeModal = () => {
        props.setOpen(false);
    };

    function mod_blog(){
        const formData = new FormData();
            formData.append('image', image);
            formData.append('context', context);
            formData.append('blog_id', props.blog.id);
            console.log(image)
            if(image=="" && context==""){closeModal();}else{
            axios.post('http://localhost:8000/api/mod_blog',formData)
            .then(response => {
                console.log(response.data);
                if(props.fetch!="false"){
                    props.fetchData();
                }
                closeModal();
                setimage("")
                props.getdata();
                if(props.fetch!="false"){
                    props.fetchData();
                }
            })
            .catch(error => {
                console.error('There was an error uploading the image!', error);
                
            });
        }
    }
    
    return(<div>
             <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="w-full h-full bg-[rgba(0,0,0,.65)] pt-[148px] pb-[110px] z-[999]">
            <div className={`flex justify-center animate__animated animate__zoomIn`}>
                <div className="min-[550px]:w-[490px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white shadow-md">
                <button className='w-5 h-5 ml-[450px] cursor-pointer mt-2' onClick={closeModal}>
                    <img src='/img/croix.png' alt='close icon' className='w-full h-full ' />
                </button>
                <h2 className='font-bold text-center text-[1.5rem]'>Modifier Votre Blog</h2 >
                <form className="px-8 pt-3 pb-5 mb-4">                   
                        <label htmlFor="message" className="block pl-1  text-sm font-medium text-gray-900 mb-4 "> Context </label>
                        <textarea onChange={(e)=>{setcontext(e.target.value)}} id="message" rows="4" className="block p-2.5  mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none" placeholder="Votre context" defaultValue={props.blog.contenu}></textarea>
                        
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900  mb-4"> Image</label>
                        <div className="flex  justify-between   ">
                            <div>
                            <label htmlFor="dropzone-file" className=" mr-2 flex flex-col items-center justify-center w-[210px] h-[120px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100  ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg" onChange={(e)=>{setimage(e.target.files[0])}}/>
                            </label></div>
                           <div className='border  rounded-md'> <img src={`http://localhost:8000/storage/${props.blog.images[0].img}`} alt='close icon' className=' w-[200px] h-[120px] ' /></div>

                        </div> 
                 </form>

                    <div className='flex justify-center'>
                        <button className="bg-[#41d049] mb-5 hover:bg-[#41d049] text-white  text-lg font-bold py-2 px-5 border border-[#41d049] rounded  "
                        onClick={mod_blog}>
                            Modifier
                        </button>
                    </div> 
                </div>
            </div>
          
            </Modal>
    </div>

    )
}
export default Mod_Blog_popup;