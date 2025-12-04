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


            $("#user-cont").append(result.results[0].name.first);
            $("#user-cont").append('<img src="' + result.results[0].picture.large + '"alt="">');
            $("#user-cont").append(`<img src="${result.results[0].picture.medium} "alt="">`);

            
        })
});