import { initializeApp } from "firebase/app";
import {getFirestore, doc, collection, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore"; 

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

// Get a list of projects from the database
async function getData() {
		const testData = collection(db, 'projects');
		try {
			await getDocs(testData).then((value) => {
				console.log(value.docs.map(doc => doc.data()))
			});
		} catch (error) {
			console.log("unable to get data" + error)
		}

}

// create a new project collection
export async function addProject(projectName) {
	if (projectName === "") {
		projectName = "[click to name project]"
	}
	const testRef = doc(db, 'projects', projectName);
	await setDoc(
			testRef, {
			}
	)
	.catch((error) => console.log("fail: " + error))
}

export async function deleteProject (projectName) {
	let ref = doc(db, "projects", projectName)
	try {
		await deleteDoc(ref);
	} catch (error) {
		console.log("unable to delete:" + error)
	}
}

export async function getAProject(projectName) {
	let ref = doc(db, "projects", projectName)
	const docSnap = await getDoc(ref)

	if (docSnap.exists()) {
		console.log(docSnap.data().tasks)
	}
	else {
		alert("no document found")
	}
}

// add a task to a project in the form of an array
export async function addTask(projectName, task) {
	const testRef = doc(db, 'projects', projectName);
	try {
		await setDoc(
			testRef, 
			{
				[task.name]: [task.description, task.deadline, task.priority]
			},
			{ merge: true }
	 )
	} catch (error) {
		console.log("unable to add task: " + error)
	}
 }
 