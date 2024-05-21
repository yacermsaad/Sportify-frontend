import React ,{useState} from "react"
import App from '../../App.jsx'
export const multistepcontext=React.createContext()
export default function Stepcontext(){
    const [step,setstep]=useState(1);
    const [vendData,setvendData]=useState({personnel_info:{fullname:"",description:"",picture:""},
        profesonel_info:{skills:[],education:[],certification:[]}
    });
    const [finalData,setfinalData]=useState([]);
    return(
        <div>
        <multistepcontext.Provider value={{step,setstep,vendData,setvendData,finalData,setfinalData}}>
            <App/>
        </multistepcontext.Provider>
    </div> 
    )
}