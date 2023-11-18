import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import firebaseConfig from "./firebaseKey.json";

function Firebase() {

  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    })
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize Firebase Cloud Messaging and get a reference to the service
  const messaging = getMessaging(app);
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // ...
  });

  // Request Permission
  requestPermission();

  getToken(messaging).then(token => {
    console.log(token);
  })

    return (
        <div className="Firebase">
            <p>firebase</p>
        </div>
    )
}

export default Firebase;