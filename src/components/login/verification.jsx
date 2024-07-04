import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modifier_pass from './modifier_pass'

import axios from 'axios';


export default function Verification(){
    const [code, setcode] = useState('');
    const code_verification = useSelector(e => e.code_verification);
    const email = useSelector(e => e.email);

    const [pas, setpas] = useState(false);
    const [pass, setpass] = useState("");
    const [confirm, setconfirm] = useState("");
    const [erre, seterre] = useState("");
    const navigate = useNavigate();


    const Verification_func=async (e)=>{
        e.preventDefault();
        if(code==code_verification){
            setpas(true)
            setcode("");
        }
    }

    return(<div>
        {pas==false?
        <form onSubmit={Verification_func} className={pas==false?"":"hidden"}>
            <h1 className={` text-2xl mb-4 font-bold text-center`}>Verification de Mot de passe</h1>

        <div className="w-full px-8 pt-5">
                <div className={'mb-1 mt-2'}>
                    <label className="block text-gray-700 text-sm font-semibold mb-5" >Code de verification</label>
                    <input required className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-10" type="number" placeholder="code..." 
                    onChange={(e)=>setcode(e.target.value)} />
                </div>

                <div className="flex w-full mt-6">
                    <button className="w-full bg-[#04cfb4] hover:bg-gray-900 hover:transition-colors duration-300 text-white text-sm py-2 px-4 font-semibold rounded h-10" type="submit"
                    >Envoyer</button>
                </div>
                 </div>
            </form>:
           <Modifier_pass/>
            
            }
            </div>
    )
}