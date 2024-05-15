import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
// import CryptoJS from 'crypto-js';
import { useSelector, useDispatch } from 'react-redux';
// import Facebooklogin from './Facebooklogin';
// import Googlelogin from './GoogleLogin';
// import Cookies from 'universal-cookie';
// import { useNavigate } from 'react-router-dom';
import { GoogleLogin ,GoogleLogout } from 'react-google-login';
import'../../assets/css/Login.css'
Modal.setAppElement('#root');



const Login=(props)=>{
    const dispatch = useDispatch();
    const Tab_SignIn = ["Connectez-vous à votre compte", "Vous n’avez pas de compte ?", "Inscrivez-vous ici", "Connexion"];
    const Tab_Join = ["Créer un nouveau compte.", "Vous avez déjà un compte?", "Se connecter", "Créer"];
    const [IsOpen,setIsOpen] = useState(false);
    const create = useSelector(e=>e.create); 

    useEffect(()=>{
        setIsOpen(props.isOpen);
    },[props.isOpen]);

    const closeModal = () => {
        props.setOpen(false);
    };
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');
    const[message,setmessage]=useState('');
    

    return <div>
        <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="w-full h-full bg-[rgba(0,0,0,.65)] pt-[148px] pb-[110px] z-[999]" >
        <div className="flex justify-center animate__animated animate__zoomIn">
        <div className="min-[870px]:flex hidden w-[490px] h-[560px]">
            <img src="/img/img2.jpg" alt="login" className="w-full h-full rounded-l-lg"/>
        </div>
        <div className="min-[550px]:w-[490px] w-full h-[560px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white">
            <button  className='w-5 h-5 ml-[460px] mt-[6px]' onClick={closeModal}>
                <img src='/img/croix.png' alt='coix icons' className='w-full h-full'/>
            </button>
            <form className="">
            <h1 className="ml-[30px] text-2xl mb-1 font-bold">{!create?Tab_SignIn[0]:Tab_Join[0]}</h1>
            <p className="ml-[30px]">{!create?Tab_SignIn[1]:Tab_Join[1]} <a className='cursor-pointer underline text-[#04cfb4]'  onClick={()=>{dispatch({type:'create',log:!create});}} >{!create?Tab_SignIn[2]:Tab_Join[2]}</a> </p>
           
            <div className="w-full px-8 pt-5 ">
            {create? <div className={'mb-2 mt-2'}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Name</label>
                    <input required className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="name" type="text" placeholder="Votre Nom" onChange={(e)=>setName(e.target.value)} 
                     />
                </div>:''}
                <div className={'mb-3 mt-2'}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email" >Email</label>
                    <input required className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="email" type="email" placeholder="Votre Email " onChange={(e)=>setEmail(e.target.value)}
                      />
                </div>
           
                <div className={'mb-1 mt-2'}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Mot de passe </label>
                    <input className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10" id="password" type="password" placeholder="Votre Mot de passe" onChange={(e)=>hashPassword(e.target.value)} />
                    {!create?<a className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800" href="/">Mot de passe oublié?</a>:''}
                   
                   
                </div>
                <div className="flex w-full mt-6">
                    <button className="w-full bg-[#04cfb4] hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded h-10 " type="submit" >{!create?Tab_SignIn[3]:Tab_Join[3]}</button>
                </div>
                </div>

                <div className="my-2 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">Ou</div>
                    
                </div>
                <div className='flex justify-center py-2'>
                 <GoogleLogin className='GoogleLogin' buttonText='Continue with Google'isSignedIn={false}/>
                </div>
               

                <div className="mt-2  space-y-4 flex justify-center items-center" >
                   
                </div>
            </form>
        </div>
        </div>
        
        </Modal>
    </div>
}

export default Login;