var form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    
    var name = document.getElementById('name');
    var message = document.getElementById('message');

    const list = document.querySelector('.list-comments');

    // var list = document.getElementsByClassName('list-comments');
    var item = document.createElement('li');

    //create person name
    // var personName = document.createElement('span');
    // personName.setAttribute('class', 'spazinho');

    // var div = document.getElementsByClassName('spazinho');
    // div.innerHTML = '<span>' + name.value + '</span>';

    // personName.innerHTML = name + ": ";
    // var tte = 

    var txtMessage = document.createTextNode(name.value + ": " + message.value);

    var but = document.createElement('button');
    var txtBut = document.createTextNode('Excluir');
    but.appendChild(txtBut);
    // but.setAttribute('class', 'btn');

    // const butExc = document.querySelector('.btn');


    but.addEventListener('click', () => {
      alert("deu certoooooo");
    })


    item.appendChild(txtMessage);
    item.appendChild(but);



    list.appendChild(item);

    alert(name.value + "mensagem: " + message.value);
    

    
    e.preventDefault();
});