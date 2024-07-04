import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


export default function Modifier_pass(){
    const email = useSelector(e => e.email);
  
    const [pass, setpass] = useState("");
    const [confirm, setconfirm] = useState("");
    const [erre, seterre] = useState("");
    const navigate = useNavigate();


    const updat_pass=async (e)=>{
        e.preventDefault()
        if(pass==confirm){
            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/update_pass`, {email,confirm});
                console.log(response.data)
                navigate('/');
                seterre("")
                } catch (error) {
                console.error('Error fetching data:', error);
            }

        }else{
            seterre("les informations incorect")
        }
    }
    return(<div>
        
            <form onSubmit={updat_pass}>
            <h1 className="text-2xl mb-4 font-bold text-center">Nouvelle  Mot de passe</h1>
            <div className='mx-[5%]'>
                <div>
                <label>Mot de pass</label>
                <input required className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-10"  type="password" placeholder="password..."
                onChange={(e)=>setpass(e.target.value)} />
                </div>
                <div>
                <label>Confirmer Mots de pass</label>
                <input required className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-10" type="password" placeholder="confirmer..." 
                onChange={(e)=>setconfirm(e.target.value)} />
                </div>
                <p>{erre}</p>
                <div className="flex w-full mt-6">
                    <button className="w-full bg-[#04cfb4] hover:bg-gray-900 hover:transition-colors duration-300 text-white text-sm py-2 px-4 font-semibold rounded h-10" type="submit"
                    >Modifier</button>
                </div>
            </div>
            </form>
            
          
            </div>
    )
}