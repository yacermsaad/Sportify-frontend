import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
Modal.setAppElement('#root');
function Profile_popup(props) {
    const [IsOpen, setIsOpen] = useState(false);
    const [image,setimage]=useState("");

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

    const closeModal = () => {
        props.setOpen(false);
    };

    function add_picture(){
        const formData = new FormData();
        if( image!=""){
            formData.append('image', image);
            const id=JSON.parse(localStorage.getItem('user')).id
            formData.append('id', id);
          
            axios.post('http://localhost:8000/api/addImgUser',formData)
            .then(response => {
                console.log(response.data);
                setimage('');
                localStorage.setItem('image_user',response.data.image)
            props.getdata()
                closeModal();
            })
            .catch(error => {
                console.error('There was an error uploading the image!', error);
                
            });}
    }
 
    
    return(<div>
             <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="w-full h-full bg-[rgba(0,0,0,.65)] pt-[148px] pb-[110px] z-[999]">
            <div className={`flex justify-center animate__animated animate__zoomIn`}>
                <div className="min-[550px]:w-[490px]  h-[350px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white">

                    <button className='w-5 h-5 ml-[450px] mt-[6px] cursor-pointer' onClick={closeModal}>
                        <img src='/img/croix.png' alt='close icon' className='w-full h-full ' />
                    </button>
                    
                    <div className="flex items-center justify-center  ">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-[300px] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100  ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG  (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg" onChange={(e)=>{setimage(e.target.files[0])}}/>
                        </label>
                    </div> 
                    <div className='flex justify-center'>
                        <button className="bg-[#41d049] hover:bg-[#41d049] text-white  text-lg font-bold py-2 px-10 border border-[#41d049] rounded  mt-3 "
                        onClick={add_picture}>
                            Submit
                        </button>
                    </div>


                  
                    
                 
                   
                    
                    
                    
                </div>
            </div>
          
            </Modal>
    </div>

    )
}
export default Profile_popup;