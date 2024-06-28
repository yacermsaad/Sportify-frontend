import { useContext, useState } from 'react';
import { multistepcontext } from './StepContext';
import Skills from './skills';
import Certification from './certification';
import Education from './education';
import { useNavigate } from 'react-router-dom';

export default function Professional_info(props){
    const { step,setstep, setvendData,vendData,setfinalData } = useContext(multistepcontext)
    const [linkdine,setlinkdine]=useState("")
    const [website,setwebsite]=useState("")
    const [msg_er_skil,setmsg_er_skil]=useState("")
    const [msg_er_edc,setmsg_er_edc]=useState("")
    const [msg_er_crtf,setmsg_er_crtf]=useState("")
    const navigate = useNavigate();
  
    const professional_func = async (e) => {
       
        if(vendData.profesonel_info.skills.length==0){
            setmsg_er_skil("Please enter your skills ")
        }
        if(vendData.profesonel_info.education.length==0){
            setmsg_er_edc("Please enter your educations ")
        }
        if(vendData.profesonel_info.certification.length==0){
            setmsg_er_crtf("Please enter your certification ")
        }
        if(website!=""){
            vendData.profesonel_info.website=website;
        }
        if(linkdine!=""){
            vendData.profesonel_info.linkdine=linkdine;
        }
        if(vendData.profesonel_info.skills.length>0 && vendData.profesonel_info.education.length>0 && 
                vendData.profesonel_info.certification.length>0){
                const profesonel_info=vendData.profesonel_info;
                const id=JSON.parse(localStorage.getItem('user')).id
                try {
                    const response = await fetch('http://localhost:8000/api/becomcoache2', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                           id,profesonel_info
                        })
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log('information successful:', data);
                         navigate("/pro");
                        localStorage.setItem('coache',1);

                       
                    } else {
                        console.error('Registration failed:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error during registration:', error);
                }
        }
    }

    return(<div className='lg:mx-[4%] xl:mx-[12%] mx-[1%] '>
            <div className='py-8 border-b-2'> 
                <h1 className='text-[2rem] font-bold text-[#747474]'>Informations professionelle </h1>
                <p className='text-[#969696] font-semibold mt-3'>C’est le moment de briller. Faites savoir aux acheteurs potentiels ce que vous faites
                 <br/> et comment vous avez acquis vos compétences, vos certifications et<br/> expérience.</p>
            </div>
            
            <div className='mx-[1%] md:mt-5'>
                <table className='w-full'>
                    <tr className='w-full flex justify-between  md:flex-row flex-col md:mb-10 mb-5   mt-5 md:mt-0'>
                        <td className=' w-[20%]  md:w-[40%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1'>
                        skills<span className='text-red-500'>*</span></td>
                        <td className='lg:w-[60%] md:w-[70%] p-2 ml-[5%] md:ml-0'>
                            <Skills/> <label className='text-red-500  '>{msg_er_skil}</label></td>
                       
                    </tr>
                    
                    
                    
                     <tr className='w-full flex justify-between md:flex-row flex-col  md:mb-10 mb-5'>
                        <td className='md:w-[40%] w-[100%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1 '>
                                Education <span className='text-red-500'>*</span></td>
                            <td className='lg:w-[60%] md:w-[70%] p-2 ml-[5%] md:ml-0'>
                                <Education/><label className='text-red-500  '>{msg_er_edc}</label>
                            </td>
                    </tr>
                    <tr className='w-full flex justify-between md:flex-row flex-col  md:mb-10 mb-5'>
                        <td className='md:w-[40%] w-[100%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1 '>
                                Certification <span className='text-red-500'>*</span></td>
                            <td className='lg:w-[60%] md:w-[70%] p-2 ml-[5%] md:ml-0'>
                                <Certification/><label className='text-red-500  '>{msg_er_crtf}</label>
                            </td>
                    </tr>
                    <tr className='w-full flex justify-between md:flex-row flex-col  md:mb-10 mb-5 '>
                        <td className='md:w-[40%] w-[100%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1 '>
                            Personal Website </td>
                            <td className='lg:w-[60%] md:w-[70%] p-2 ml-[5%] md:ml-0'>
                            <div className=" h-12 md:w-full bg-gray-50">
                                <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                                bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                                transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                                placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                                focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" Provide a link to your own professional website..."  onChange={(e)=>{setwebsite(e.target.value)}}/>
                            </div>
                            </td>
                    </tr>
                    <tr className='w-full flex justify-between md:flex-row flex-col  md:mb-10 mb-5 '>
                        <td className='md:w-[40%] w-[100%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1 '>
                            Personal Linkdine </td>
                            <td className='lg:w-[60%] md:w-[70%] p-2 ml-[5%] md:ml-0'>
                            <div className=" h-12 md:w-full bg-gray-50">
                                <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                                bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                                transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                                placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                                focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" Provide a link to your own professional linkdine..." onChange={(e)=>{setlinkdine(e.target.value)}} /> 
                          
                           </div>
                            </td>
                    </tr>
                    <tr className='md:mb-10 mb-5  block'>
                        <td></td>
                        <td className=" flex justify-end">
                            <button className="bg-[#41d049] hover:bg-[#41d049] text-white  text-lg font-bold py-2 px-10 border border-[#41d049] rounded  "
                            onClick={()=>{if(step==2){professional_func()}}} >
                                Continue
                            </button>
                        </td>
                    </tr>

                    
                </table>
            
            </div>
           
        </div>
       
    )
}