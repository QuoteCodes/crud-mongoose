$.ajax({
    url: "http://localhost:2000/api/users",
    method : "GET"
  })
    .done(function(found) {
      found.forEach(dt =>{
        $(`#data`).append(`
        <p> ${dt.name} </p>
        `)
      }) 
     })
    .fail(function(err){
        console.log(err); 
    })

    function saveData(){
        let name = $(`#name`).val()
        let email = $(`#email`).val()
        let password = $(`#password`).val()
        let role = $(`#role`).val()

        $.ajax({
            url: "http://localhost:2000/api/users",
            method : "POST",
            data :{
                name, email, password, role
            }, 
            headers: {
                token: localStorage.getItem('token')
            }
            })
        .done(function(found) {
            window.location = `/`
        })
        .fail(function(err){
            console.log(err); 
        })
    } 
    
    function doLogin(){
        let email = $(`#email`).val()
        let password = $(`#password`).val()

        $.ajax({
            url: "http://localhost:2000/api/users/login",
            method : "POST",
            data :{
              email, password
            }
            })
        .done(function(found) {
            localStorage.setItem('token', found.token)
        })
        .fail(function(err){
            console.log(err); 
        })
    }

    $(document).ready(function(){
        // saveData()
    })

//   no arrow function  