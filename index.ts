import * as firebase from 'firebase';
import '@firebase/firestore';

firebase.initializeApp({
  // NOTE: Replace the values below with those for your own Firebase project.
  apiKey: "AIza...",
  appId: "1:3577....",
  projectId: "..."
});

async function getDepartmentAbsentCount() {
  const snapshot = await firebase.firestore().collection('XXXX').where('XXX', '>', 0).get()
  return snapshot.docs.map(doc => doc.data());
}

async function main() {
  // Create some documents for the query.
  const collection = firebase.firestore().collection('XXXX');
  await collection.doc("Match1").set({"XXX": 1});
  await collection.doc("Match2").set({"XXX": 2});
  await collection.doc("NoMatch1").set({"XXX": 0});
  await collection.doc("NoMatch2").set({"XXX": 1});

  // Run the problematic query.
  const xyzList = ["abc", "XYZ", "pqr"];
  xyzList.forEach(async (item) => {
    await getDepartmentAbsentCount().then((data: any) => {
      console.log("Response =" + JSON.stringify(data));
    })
  })
}

main()
