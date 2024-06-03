import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
// import CryptoJS from 'crypto-js';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
    const [t,i18n]=useTranslation();

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
        <div className={`flex justify-center  animate__animated animate__zoomIn`}>
        <div className="min-[870px]:flex hidden w-[490px] h-[560px] ">
            <img src="/img/img2.jpg" alt="login" className="w-full h-full rounded-l-lg"/>
        </div>
        <div className="min-[550px]:w-[490px] w-full h-[560px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white" dir={`${i18n.language == 'ar' ?"rtl" : ''}`}>
            <button  className='w-5 h-5 ml-[460px] mt-[6px]' onClick={closeModal}>
                <img src='/img/croix.png' alt='coix icons' className='w-full h-full'/>
            </button>
            <form className="">
            <h1 className={`${i18n.language == 'ar' ?'mr-[30px]': 'ml-[30px]'} text-2xl mb-1 font-bold`}>{!create?t('cnct_v_cmpt'):t('cree ncmp')}</h1>
            <p className={`${i18n.language == 'ar' ?'mr-[30px]': 'ml-[30px]'}`}>{!create?t('v_n_p_c'):t('v_c')} <a className='cursor-pointer underline text-[#04cfb4]'  onClick={()=>{dispatch({type:'create',log:!create});}} >{!create?t('i_v'):t('cnx')}</a> </p>
           
            <div className="w-full px-8 pt-5 ">
            {create? <div className={'mb-2 mt-2'}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">{t('nom')}</label>
                    <input required className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="name" type="text" placeholder={t('v_n')} onChange={(e)=>setName(e.target.value)} 
                     />
                </div>:''}
                <div className={'mb-3 mt-2'}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email" dir={`${i18n.language == 'ar' ?"rtl" : ''}`} >{t('email')}</label>
                    <input required className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="email" type="email" placeholder={t('v_em')} onChange={(e)=>setEmail(e.target.value)}
                      />
                </div>
           
                <div className={'mb-1 mt-2'}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password" dir={`${i18n.language == 'ar' ?"rtl" : ''}`}>{t('m_p')} </label>
                    <input className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10" id="password" type="password" placeholder={t('v_m_p')} onChange={(e)=>hashPassword(e.target.value)} />
                    {!create?<a className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800" href="/">{t('o_m')}</a>:''}
                   
                   
                </div>
                <div className="flex w-full mt-6">
                    <button className="w-full bg-[#04cfb4] hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded h-10 " type="submit" >{!create?t('cnx'):t('insc')}</button>
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