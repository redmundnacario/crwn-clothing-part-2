import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebase.config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const createUserProfileDocument = async(userAuth, additionalData) => {
    // if user profile from firebase auth is null/undefined,
    // then exit function with no return value
    if (!userAuth) return ;

    // else get uid from the userAuth
    // then use it for Query reference in firestore
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // The keyword await makes JavaScript wait until ...
    // ...that promise settles and returns its result.
    // await is only used inside async function
    // this one get the document snapshot of the document ref. 
    const snapShot = await userRef.get();

    // document snapshot has 'exists' boolean property
    // if a User with specific uid doesn't exists in firestore ...
    // then create new User account in firestore
    if (!snapShot.exists){
        // destructuring the userAuth
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            });

        } catch(error){
            console.log('error creating user', error.message);
        }
    };
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;