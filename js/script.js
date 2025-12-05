$(document).ready(function(){
    // $.ajax({
    // url: 'https://randomuser.me/api/',
    // dataType: 'json',
    // success: function(data) {
    //     console.log(data);
    // }


    fetch("https://randomuser.me/api")
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            console.log(result);
            console.log(result.results[0].name.first);
            console.log(result.results[0].name.last);
            console.log(result.results[0].picture.large);


            // $("#user-cont").append(result.results[0].name.first);
            // $("#user-cont").append(result.results[0].name.last);
            // $("#user-cont").append('<img src="' + result.results[0].picture.large + '"alt="">');
            // $("#user-cont").append(`<img src="${result.results[0].picture.medium} "alt="">`);

            let fullName = result.results[0].name.first + " " + result.results[0].name.last;
            let fullContact = result.results[0].cell + " " + result.results[0].email;
            let fullLocation = result.results[0].location.city +", " + result.results[0].location.country;


            // $("#uName").append(result.results[0].name.first);
            // $("#uName").append(result.results[0].name.last);
            $("#uName").append(fullName);

            $("#uImg").append('<img src="' + result.results[0].picture.large + '"alt="">');

            // $("#uLocation").append(result.results[0].location.city);
            // $("#uLocation").append(result.results[0].location.country);
            $("#uLocation").append(fullLocation);


            // $("#uContact").append(result.results[0].cell);
            // $("#uContact").append(result.results[0].email);
            $("#uContact").append(fullContact);

            
        })
});

