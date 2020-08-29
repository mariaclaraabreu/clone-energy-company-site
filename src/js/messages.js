const messages =[];
var id = 0;
const idLetters = 'item';


var form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    
    var name = document.getElementById('name');
    var message = document.getElementById('message');

   

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
    // var idItem = idLetters + cont++;
    // console.log("aaaaaa" + idItem);
    id = id + 1;
    var te = idLetters + id;
    console.log("aaaaaaa" + te);
    but.setAttribute('id', te);

    // const butExc = document.querySelector('.btn');

    but.setAttribute('class', 'item-list');

    // but.addEventListener('click', () => {
    //   alert("deu certoooooo");
    // })


    item.appendChild(txtMessage);
    item.appendChild(but);

    messages.push(item);
    console.log(messages);
    

    // list.appendChild(item);

    // alert(name.value + "mensagem: " + message.value);
    

    
    e.preventDefault();

    
    mostrarLista();
    excluir();
});


function mostrarLista(){
  const list = document.querySelector('.list-comments');
  for(var i = 0; i < messages.length; i++){
    // let item = document.createElement('li');
    // item.appendChild(document.createTextNode(nomes[i]));
    list.appendChild(messages[i]);
}
}


function excluir(){
  const itemList = document.querySelector('.item-list');

  itemList.
  console.log("iiiiiii" + itemList.value);


  var x = document.getElementByClassName("item-list");
  var meuId = x.id;

  itemList.addEventListener('click', () => {
    //pega o id do item


    alert("oiiiiiiiiiiiii" + meuId);
  });

  mostrarLista();

}


