export var createUserReducer=(state={},action)=>{
    switch(action.type){
        case 'CREATE_USER':
            return{
                ...action.user
            };
            case 'LOGOUT':
                return {};
        default:
            return state;   
    }
};
export var userInfoReducer=(state={},action)=>{
    switch(action.type){
        case 'USER_INFO':
            return action.userInfo;
        
        case 'LOGOUT':
            return {};
            
        default:
            return state;
    }
};
export var donorsInfoReducer=(state={},action)=>{
    switch(action.type){
        case 'GET_DONORS_INFO':
            return action.donors;
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};
// export var getBloodGrpReducer=(state='',action)=>{
//     switch(action.type){
//         case 'GET_BLOOD_GROUP':
//             return action.bloodGrp;
//         default:
//             return state;
//     }
// };
export var authReducer= (state={},action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                uid: action.uid
            };
        
        case 'LOGOUT':
            return {};
        default:
            return state;
    };
};