var modal = $("#myModal");
var data = [];

var addValues = function (item) {

  var nome = $("#products").find("li")[item];
  var $nome = $(nome);
  var texto = $nome.text();
  data.push(texto);
}

var showModal = function (data) {
  var list = modal.find("#list");
  var lista = document.getElementById("list");
  list.empty(); // Limpa a lista

  // Percorre o conjunto de dados e guarda os valores na lista
  $.each(data, function (index, item) {

    // Cria um novo elemento li
    var novoItem = document.createElement("li");

    // Cria um nó de texto para o elemento li
    //var li = $("<li></li>").text(item);
    var texto = document.createTextNode(item);
    novoItem.appendChild(texto);

    // Adiciona o elemento li a um elemento ul existente
    lista.appendChild(novoItem);
    
  });

  // Mostra o modal
  modal.show();

}

$(document).ready(function () {

  // Atribui uma função ao evento de clique de um botão com a classe "add"
  $("#productsList li").click(function() {
    var item = $(this).index();
    // Esta linha de código será executada quando o botão for clicado
    addValues(item);
    console.log(item);
  });

  // Atribui uma função ao evento de clique de um botão com o id "cart"
  $("#cart").click(function () {

    // This code will be executed when the button is clicked
    showModal(data);

    // Adiciona um evento de clique ao botão fechar
    var closeButton = modal.find(".close");
    closeButton.on("click", function () {
      modal.hide();
    });

  });
});

