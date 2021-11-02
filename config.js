import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyCKgf67HBWFF96rP6YekJ5_r2ZYXTbevI4",
        authDomain: "c-67-42f80.firebaseapp.com",
        projectId: "c-67-42f80",
        storageBucket: "c-67-42f80.appspot.com",
        messagingSenderId: "727062261802",
        appId: "1:727062261802:web:c836e233510f699b6c5353"
    
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();