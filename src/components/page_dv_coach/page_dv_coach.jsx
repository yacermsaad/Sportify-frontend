import { useContext, useState } from 'react';
import { multistepcontext } from './StepContext'

import {Stepper,StepLabel,Step} from '@material-ui/core'
import "../../assets/css/page_dv_vend.css"
import Personal_info from './personal_info';
import Professional_info from './professional_info';



export default function Page_dv_coache(){

  const {step, setvendData,setfinalData } = useContext(multistepcontext)
  let [scrolly, setscrolly] = useState();
  window.addEventListener('scroll',()=>{setscrolly(window.scrollY)})
  function showStep(step){
    switch(step){
      case 1:
        return <Personal_info/>
      case 2:
        return <Professional_info/> 
      
    }
  }
    return(
        <>
        <div className={`w-full top-0 left-0 border-b-2 lg:px-[4%] xl:px-[12%] md:bg-white`} > 
             
        <div className="flex items-center my-5">
        <span className="font-bold text-2xl md:text-3xl">Sporti<span className="text-green-500">fy.</span></span>
      </div>
          </div>
          <div>
          

        <Stepper orientation='horizontal' activeStep={step-1} className=' steper lg:mx-[4%] xl:mx-[12%] border-b-2 '>
        <Step >
          <StepLabel >Personal Info</StepLabel>
        </Step>
        <Step>
          <StepLabel> Professional Info</StepLabel>
        </Step>
       
      </Stepper>
      <div className='progressbar  visible md:hidden'>
          <div style={{ width: step - 1 == 0 ? "25%" : step - 1 == 1 ? "50%" : step - 1 == 2 ? "75%" : "100" }}></div>
        </div>
      </div>
      {showStep(step) }
    
        </>
    )
}