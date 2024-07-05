import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';

Modal.setAppElement('#root');

export default function Order_confirmation(props){
    const [IsOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    // const history = useHistory();


    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);
    const closeModal = () => {
        props.setOpen(false);
    };

    const confirmer= async ()=>{
         const user=JSON.parse(localStorage.getItem('user'))
         if(user!=undefined){
            try {
                const user_id=user.id;
                const id=props.id
                const response = await axios.post(`http://127.0.0.1:8000/api/Add_order`,{user_id,id});
                console.log(response.data)
                navigate("http://127.0.0.1:8001");
                // history.push('http://127.0.0.1:8080')
                window.location.href = 'http://127.0.0.1:8001/'
                closeModal();
                } catch (error) {
                console.error('Error fetching data:', error);
            }
         }
        

    }
    return(<div>
        <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="w-full h-full bg-[rgba(0,0,0,.65)] pt-[148px] pb-[110px] z-[999]">
       <div className={`flex justify-center animate__animated animate__zoomIn`}>
           <div className="min-[550px]:w-[490px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white shadow-md">
                    <button className='w-5 h-5 ml-[450px] cursor-pointer mt-2' onClick={closeModal}>
                        <img src='/img/croix.png' alt='close icon' className='w-full h-full ' />
                    </button>
                    <p className='text-center'>Confirmer la commande</p>
                    <div className='flex justify-center mt-10'>
                        <button className="bg-green-500 mb-5  text-white  text-sm font-bold py-2 px-5 border border-green-500 rounded mr-5  "
                         onClick={confirmer}>
                            Confirmer
                        </button >
                        <button className=" bg-gray-400 mb-5  text-white  text-sm font-bold py-2 px-5 border border-gray-400 rounded  "
                        onClick={closeModal}>
                            Annuler
                        </button>
                    </div>
           </div>
        </div>
        </Modal>
        </div>)

    
}