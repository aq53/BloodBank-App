export var createUserReducer=(state={},action)=>{
    switch(action.type){
        case 'CREATE_USER':
            return{
                ...action.user
            };
        default:
            return state;   
    }
};
export var getBloodGrpReducer=(state='',action)=>{
    switch(action.type){
        case 'GET_BLOOD_GROUP':
            return action.bloodGrp;
        default:
            return state;
    }
};
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