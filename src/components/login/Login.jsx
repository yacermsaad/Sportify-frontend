import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Login.css';
import Modb_ob from "./oublier_md"

Modal.setAppElement('#root');

const Login = (props) => {
    const dispatch = useDispatch();
    const Tab_SignIn = ["Connectez-vous à votre compte", "Vous n’avez pas de compte ?", "Inscrivez-vous ici", "Connexion"];
    const Tab_Join = ["Créer un nouveau compte.", "Vous avez déjà un compte?", "Se connecter", "Créer"];
    const [IsOpen, setIsOpen] = useState(false);
    const create = useSelector(e => e.create);
    const [t, i18n] = useTranslation();
    const navigate = useNavigate();


    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

  

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [obl_md,setobl_md]= useState(false);

    const closeModal = () => {
        props.setOpen(false);
        setobl_md(false)
        setPass('');setEmail('');setName('')
    };
    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            setIsSuccess(false);
            return;
        }
        setPasswordError('');
        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    type: 'client',
                    confirmation_email: true
                })
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                setName('');
                setEmail('');
                setPass('');
                setMessage('Registration successful!');
                setIsSuccess(true);
                dispatch({ type: 'create', log: !create });
            } else {
                console.error('Registration failed:', response.statusText);
                setMessage('Registration failed: ' + response.statusText);
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('Error during registration: ' + error.message);
            setIsSuccess(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify({ name: data.name, type: data.type, email: data.email,id: data.id}));
                localStorage.setItem('image_user',data.image_user);
                localStorage.setItem('coache',data.coache);
                setEmail('');
                setPass('');
                setMessage('Login successful!');
                setIsSuccess(true);
                if(props.blog=="true"){
                    window.location.reload(false);
                                    navigate('/blogs');
                             
                }else{
                    navigate("/")
                }
               
                closeModal();
            } else {
                console.error('Login failed:', response.statusText);
                setMessage('Login failed: ' + response.statusText);
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('Error during login: ' + error.message);
            setIsSuccess(false);
        }
    };
    return (
        <div>
            <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="w-full h-full bg-[rgba(0,0,0,.65)] pt-[148px] pb-[110px] z-[9999]">
                <div className={`flex justify-center animate__animated animate__zoomIn`}>
                    
                  
                    <div className="min-[870px]:flex hidden w-[490px] h-[560px] ">
                        <img src={obl_md==false?"https://i.pinimg.com/564x/ed/1c/53/ed1c53ea75cacaf96165684b1179c074.jpg":"/img/login1.jpg"} alt="login" className="w-full h-full rounded-l-lg" />
                    </div>
                    <div className="min-[550px]:w-[490px] w-full h-[560px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white" dir={`${i18n.language === 'ar' ? "rtl" : ''}`}>
                        <button className='w-5 h-5 ml-[460px] mt-[6px]' onClick={closeModal}>
                            <img src='/img/croix.png' alt='close icon' className='w-full h-full' />
                        </button>
                        {obl_md==false?
                        <form className="" onSubmit={create ? handleRegistration : handleLogin}>
                            <h1 className={`${i18n.language === 'ar' ? 'mr-[30px]' : 'ml-[30px]'} text-2xl mb-1 font-bold`}>{create ? t('cree ncmp') : t('cnct_v_cmpt')}</h1>
                            <p className={`${i18n.language === 'ar' ? 'mr-[30px]' : 'ml-[30px]'}`}>{create ? t('v_c') : t('v_n_p_c')} <a className='cursor-pointer underline text-[#04cfb4]' onClick={() => { dispatch({ type: 'create', log: !create });setEmail("");setPass("") }}>{create ? t('cnx') : t('i_v')}</a> </p>
                            <div className="w-full px-8 pt-5">
                                {create && (
                                    <div className={'mb-2 mt-2'}>
                                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">{t('nom')}</label>
                                        <input required className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="name" type="text" placeholder={t('v_n')} onChange={(e) => setName(e.target.value)} value={name} />
                                    </div>
                                )}
                                <div className={'mb-3 mt-2'}>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email" dir={`${i18n.language === 'ar' ? "rtl" : ''}`}>{t('email')}</label>
                                    <input required className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="email" type="email" placeholder={t('v_em')} onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className={'mb-1 mt-2'}>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password" dir={`${i18n.language === 'ar' ? "rtl" : ''}`}>{t('m_p')}</label>
                                    <input required className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10" id="password" type="password" placeholder={t('v_m_p')} onChange={(e) => setPass(e.target.value)} value={password} />
                                    {passwordError && <p className="text-red-500 text-xs italic mt-1">{passwordError}</p>}
                                    {!create && <a className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800 cursor-pointer"onClick={()=>{setobl_md(true)}} >{t('o_m')}</a>}
                                </div>
                                <div className="flex w-full mt-6">
                                    <button className="w-full bg-[#04cfb4] hover:bg-gray-900 hover:transition-colors duration-300 text-white text-sm py-2 px-4 font-semibold rounded h-10" type="submit">{create ? t('insc') : t('cnx')}</button>
                                </div>
                            </div>
                            <div className="my-2 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">Ou</div>
                            </div>
                            <div className='flex justify-center py-2'>
                                <GoogleLogin className='GoogleLogin' buttonText='Continue with Google' isSignedIn={false} />
                            </div>
                            {message && !passwordError && <div className={`mt-2 text-center text-sm ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>{message}</div>}
                        </form>:<Modb_ob></Modb_ob>}
                    </div>
                  
                </div>
            </Modal>
        </div>
    );
}

export default Login;
