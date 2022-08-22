// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, collection, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc, deleteField } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCFdZLBAvt2E_0bTE2u6O_w1pzhHdz6cuc",
authDomain: "todo-230e3.firebaseapp.com",
projectId: "todo-230e3",
storageBucket: "todo-230e3.appspot.com",
messagingSenderId: "944585416467",
appId: "1:944585416467:web:6340a2a77ad55cae0c84e6",
measurementId: "G-C2FPTYBKLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getData() {
		const testData = collection(db, 'test');
		await getDocs(testData).then((value) => {
				console.log(value.docs.map(doc => doc.data()))
		});
}

// Get a list of cities from your database
async function getProjectByName(projectName) {
	const testData = collection(db, 'projects',);
	await getDocs(testData).then((value) => {
			console.log(value, projectName)
			// console.log(value.docs.map(doc => doc.data()))
	});
}

// const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
//   });

export async function addProject(projectName) {
 const testRef = doc(db, 'projects', projectName);
 const docRef = await setDoc(
		testRef, {
			task: ''
		}
 )
 .then(() => {
		console.log("success")
 })
 .catch((error) => console.log("fail: " + error))
}

export async function getAProject(projectName) {
	let ref = doc(db, "projects", projectName)
	const docSnap = await getDoc(ref)

	if (docSnap.exists()) {
		console.log(docSnap.data().tasks)
	}
	else {
		alert("no document")
	}
}


export async function addTask(projectName, task) {
	let ref = doc(db, "projects", projectName)

	await updateDoc(
		ref, task
	)
	.then(() => {
		alert("success")
	})
	.catch((error) => {
		alert("fail: " + error)
	})

	// console.log(projectName, task)
	// getProjectByName(projectName)
	// const testRef = collection(db, 'test');
	// const docRef = await addDoc(
	// 	 testRef, {
	// 		 project: projectName
	// 	 }
	// )
	// .then(() => {
	// 	 console.log("success")
	// })
	// .catch((error) => console.log("fail: " + error))
 }
 