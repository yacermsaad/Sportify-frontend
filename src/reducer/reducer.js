const initialState={
    create:false,
}
const reducer=(state=initialState,action)=>{ 

   switch(action.type){
       case "create":
           return {...state, create:(action.log)}
   }
   return state
}
export default reducer