import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDcEa-1l_dMevxJcKyPXzquq-XLu59bTBI',
    authDomain: 'notes-app-cddaf.firebaseapp.com',
    databaseURL: 'https://notes-app-cddaf-default-rtdb.firebaseio.com',
    projectId: 'notes-app-cddaf',
    storageBucket: 'notes-app-cddaf.appspot.com',
    messagingSenderId: '426858118686',
    appId: '1:426858118686:web:360acd010a1739bf4eb80f',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
