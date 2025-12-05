$(document).ready(function () {
  // $.ajax({
  // url: 'https://randomuser.me/api/',
  // dataType: 'json',
  // success: function(data) {
  //     console.log(data);
  // }

  const $container = $("#userCont");

  fetch("https://randomuser.me/api")
    .then(function (response) {
      if (response.ok) {
        throw new Error("Usuarios error");
      }

      return response.json();
    })
    .then(function (result) {
      console.log(result.results[0]);

      let user = result.results[0];

      let card = `
            <div> 
                <img src=" ${user.picture.large}" alt="">
                <div>
                    <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                    <p> ${user.location.city} -  ${user.location.country} </p>
                    <div>
                        <a href="mailto: ${user.email}">${user.email}</a>
                        <span>${user.phone}</span>
                    </div>    
                </div>            
             </div>
            `;
      $container.append(card);
    })
    .catch(function () {
      $container.append("Perdoneme error");
    });
});
