import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getDatabase,
ref,
get

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyBPe74d1Em1nPcxYbBMiS1S2Wob7NloMcE",
  authDomain: "certificate-verification-386d8.firebaseapp.com",
  databaseURL: "https://certificate-verification-386d8-default-rtdb.firebaseio.com",
  projectId: "certificate-verification-386d8",
  storageBucket: "certificate-verification-386d8.firebasestorage.app",
  messagingSenderId: "324706708399",
  appId: "1:324706708399:web:e2b5a85cc59d047fc81d5a",
  measurementId: "G-CZGCRJZSLX"
};

const app =
initializeApp(firebaseConfig);

const db =
getDatabase(app);

const params =
new URLSearchParams(window.location.search);

const id =
params.get("id");

const studentRef =
ref(db, 'students/' + id);

get(studentRef).then((snapshot)=>{

if(snapshot.exists()){

const data = snapshot.val();

document.getElementById("name").innerHTML =
data.name;

document.getElementById("class").innerHTML =
data.class;

document.getElementById("school").innerHTML =
data.school;
    
document.getElementById("ref").innerHTML =
data.ref;

}

else{

document.querySelector(".card").innerHTML =
"<h2>❌ Certificate Not Found</h2>";

}

});
