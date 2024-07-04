const initialState={
    create:false,
    code_verification:null,
    email:null,
}
const reducer=(state=initialState,action)=>{ 

   switch(action.type){
       case "create":
           return {...state, create:(action.log)};
        case "code_verf":
            return {...state, code_verification:(action.data)}
            case "email":
                return {...state, email:(action.data)}
   }
   return state
}
export default reducer