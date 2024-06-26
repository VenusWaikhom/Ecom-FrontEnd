import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context";
import MainRoutes from "./MainRoutes";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCuxN4w0ax54If59kabDcT8cujb6KPekJg",
  authDomain: "ecommerce-d0efb.firebaseapp.com",
  projectId: "ecommerce-d0efb",
  storageBucket: "ecommerce-d0efb.appspot.com",
  messagingSenderId: "888001488379",
  appId: "1:888001488379:web:96a7608e66b62241b9d75e",
  measurementId: "G-5SH6TBJ724",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const messaging = getMessaging(app);

function App() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      getToken(messaging, {
        vapidKey:
          "BNiPHZW3AtgB1JuLvbRLAs-lPLdSjUV_K5gOrQ1LRso_YCoZhruk1SA1Fxm6R7jfYyhTqXFQwkyzqAiB6NaWQ_I",
      }).then((token) => {
        localStorage.setItem("firebaseToken", token);
        console.log(token, "FOUND");
      });
    }
  });

  onMessage(messaging, (payload) => {
    alert(payload.notification.title);
    console.log(payload);

    // ...
  });

  return (
    <UserProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
