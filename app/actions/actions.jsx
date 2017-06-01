import firebase, { firebaseRef } from 'app/firebase/';
import {hashHistory} from 'react-router';

export var startLogin = (regEmail, regPassword) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(regEmail, regPassword).then((result)=>{
            console.log('Logged In');
            hashHistory.push('/home');
        },(error)=>{
            console.log('unable to login');
        });
    }
};
export var startLogout = ()=>{
    return(dispatch,getState)=>{
        firebase.auth().signOut().then(()=>{
            console.log('Logged out!');
        });
    };
};
export var createUser=(user)=>{
    return {
        type:'CREATE_USER',
        user
    };
};
export var startCreateUser = (email, password,name,contact,age,address,bloodGrp) => {
    return (dispatch, getState) => {
        var user={
            email,
            password,
            name,
            contact,
            age,
            address,
            bloodGrp,
            donate: false
        };
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((result)=>{
            console.log(result);
            console.log('user created')
            var uid=result.uid;
            var userRef=firebaseRef.child(`users/${uid}`).set(user);
            return userRef.then(()=>{
                dispatch(createUser({
                    ...user,
                    id:uid
                }));
            });
        },(error)=>{
            console.log('unable to create user');
        });

    }
};
export var toggleDonateBlood=(status)=>{
    return (dispatch,getState)=>{
        var uid=getState().auth.uid;
        return firebaseRef.child(`users/${uid}`).update({donate:status});
    }
};
export var userInfo=(userInfo)=>{
    return {
        type: 'USER_INFO',
        userInfo
    }
};
export var donorsInfo=(donors)=>{
    return {
        type: 'GET_DONORS_INFO',
        donors
    };
};
export var getDonorsInfo=()=>{
    return (dispatch,getState)=>{
        return firebaseRef.child('users').on('value',(snapshot)=>{
            dispatch(donorsInfo(snapshot.val()));
        });
    }
};
export var getUserInfo=(uid)=>{
    return (dispatch,getState)=>{
        return firebaseRef.child(`users/${uid}`).on('value',(snapshot)=>{
            dispatch(userInfo(snapshot.val()));
        });
    }
};
export var login= (uid)=>{
    return {
        type: 'LOGIN',
        uid,
    };
};
export var logout= ()=>{
    return {
        type: 'LOGOUT',
    };
};