import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function Modb_ob(){
    const [email, setemail] = useState('');
    const [err, seterr] = useState('');

    const dispatch = useDispatch();
    const code= Math.floor(Math.random() * 1000) 
    const navigate = useNavigate();
    const Send_code = async (e)=>{
        e.preventDefault();
                if(email!=''){
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/oub`, {email,code });
            console.log(response.data)
            console.log(email)
            if(response.data.message=="Email sent successfully"){
                dispatch({ type: 'code_verf', data: code });
                dispatch({ type: 'email', data: email });
                navigate('/verification');

                seterr('')
            }else{
                seterr(response.data.message)
            }
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        }
      
            
          
    }

    return(<form onSubmit={Send_code}>
            <h1 className={` text-2xl mb-4 font-bold text-center`}>Oublier le Mot de passe</h1>
            <p className="ml-8 font-medium ">Nous enverrons un code de validation au votre email </p>
            {/* <p className="ml-5 font-medium ">Saisir votre email </p> */}


        <div className="w-full px-8 pt-5">
                <div className={'mb-1 mt-2'}>
                    <label className="block text-gray-700 text-sm font-semibold mb-5" htmlFor="password">Votre email</label>
                    <input required className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-10" id="password" type="email" placeholder="votre email" 
                    onChange={(e)=>setemail(e.target.value)} />
                </div>
                {err!=""?<p className='text-red-500 text-sm font-semibold ml-1'>{err}</p>:null}


                <div className="flex w-full mt-6">
                    <button className="w-full bg-[#04cfb4] hover:bg-gray-900 hover:transition-colors duration-300 text-white text-sm py-2 px-4 font-semibold rounded h-10" type="submit"
                    >Envoyer</button>
                </div>
                 </div>
            </form>

    )
} 