let usersDB = JSON.parse(localStorage.getItem('usersDB')) || [];

$('#signupBtn').click(function () {
    let newUser = {
        login: $('#login').val(),
        password: $('#password').val()
    };
    $('#login').val('');
    $('#password').val('')
    let findUser = false;
    for (let el of usersDB) {
        if (el.login == newUser.login) {
            findUser = true;
        }
    }

    

    if (findUser == false) {
        usersDB.push(newUser);

        localStorage.setItem('usersDB', JSON.stringify(usersDB))
        

        alert('Додано нового користувача');
    } else {
        alert('Нікнейм зайнятий');
    }


    

    let a = JSON.stringify(newUser)
    let b = JSON.parse(a)

    let cartconteiner = document.querySelector('.cartconteiner');

    let i = 0;
    
  
      i++;
      let button = document.createElement('div');
      button.className = 'cart';
      button.innerHTML =' <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>'+b.login;
      cartconteiner.append(button)
     
    
      usersDB.push(createcart);

      localStorage.setItem('usersDB', JSON.stringify(usersDB))

  

})

$('#signinBtn').click(function () {
    let candidate = {
        login: $('#login').val(),
        password: $('#password').val()
    };
    $('#login').val('');
    $('#password').val('');
    let findUser = false;
    for (let el of usersDB) {
        if (el.login == candidate.login && el.password == candidate.password) {
            findUser = true;
        }
    }
    if (findUser == true) {
        alert('Вхід виконано');
    } else {
        alert('Невідомий користувач');
    }
  
    $('.cart').css("display", "flex");
    $('#password').css("display", "none");
    $('.btn').css("display", "none");
    $('#login').css("display", "none");

})













