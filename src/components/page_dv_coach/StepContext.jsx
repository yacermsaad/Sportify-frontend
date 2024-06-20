import React ,{useState} from "react"
import App from '../../App.jsx'
export const multistepcontext=React.createContext()
export default function Stepcontext(){
    const [step,setstep]=useState(1);
    const [vendData,setvendData]=useState({profesonel_info:{skills:[],education:[],certification:[],website:"",linkdine:""}
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