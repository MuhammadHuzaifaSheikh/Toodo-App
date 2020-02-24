var i = 0;

var ul = document.getElementById('list');

var text = document.getElementById('text');

var db = firebase.firestore();


function addToodo() {


    if (text.value === '') {
        alert('Please Type Some Value')
    } else {


        db.collection("toodoos").add({time: Date.now(), text: text.value})
            .then(function (docRef) {
                text.value = '';
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            })
    }


}



















