

var result = new Array();

firebase.auth().onAuthStateChanged(function(user) {

    if(user){
        

        firebase.database().ref('/posts/test').orderByChild("uid").equalTo(user.uid).on("child_added",function(snapshot) {

        //console.log(snapshot.val());
        //console.log(JSON.stringify(snapshot.val()))
        
        result.push(snapshot.val());


    });
    
    var article = new Vue({
        el: '#article',
        data: {
            questionCards: result
        }
        })
    }

});