let campanha = 3;

function formulario_1(){
  let nome_cliente = document.querySelector('#nome_1').value;
  let telefone_cliente = document.querySelector('#telefone_1').value;
  let unidade_cliente = document.querySelector('#cidade_1').value;
  var interesses_1 = document.querySelectorAll('.interesses_1:checked');
  var values = [];

  for(let i = 0; i < interesses_1.length; i ++){

    values.push(interesses_1[i].value);
  }

  $.ajax({
    url: 'https://crm-vendas.herokuapp.com/api/indicar/campanha',
    crossDomain: true,
    type: 'POST',
    dataType: 'json',
  
    data: {
      nome_cliente: nome_cliente,
      telefone_cliente: telefone_cliente,
      unidade_cliente: unidade_cliente,
      id_campanha: campanha,
      descricao_observacao: values
    },
  
    success: function() {
      $('#nome_1').val("");
      $('#telefone_1').val("");
      $('#cidade_1').val("");

      swal({
        title: "Recebemos o seu contato!",
        text: "Em breve você terá todas as suas dúvidas respondidas.",
        icon: "success",
        button: 'beleza!',
        className: 'verde',
      });
    },
    
    error: function(){
      swal({
        title: "Whops! Houve um erro no cadastro",
        text: "Parece que você deixou de preencher algum campo do formulário :( Por favor, revise antes de enviar novamente",
        icon: "error",
        button: 'beleza!',
        dangerMode: true
      });
    },
  });  
};

function formulario_2(){
  let nome_cliente = document.querySelector('#nome_2').value;
  let telefone_cliente = document.querySelector('#telefone_2').value;
  let unidade_cliente = document.querySelector('#cidade_2').value;
  var interesses_2 = document.querySelectorAll('.interesses_2:checked');
  var values = [];

  for(let i = 0; i < interesses_2.length; i ++){

    values.push(interesses_2[i].value);
  }
  
  $.ajax({
    url: 'https://crm-vendas.herokuapp.com/api/indicar/campanha',
    crossDomain: true,
    type: 'POST',
    dataType: 'json',
  
    data: {
      nome_cliente: nome_cliente,
      telefone_cliente: telefone_cliente,
      unidade_cliente: unidade_cliente,
      id_campanha: campanha,
      descricao_observacao: values
    },
  
    success: function() {

      $('#nome_2').val("");
      $('#telefone_2').val("");
      $('#cidade_2').val("");

      swal({
        title: "Recebemos o seu contato!",
        text: "Em breve você terá todas as suas dúvidas respondidas.",
        icon: "success",
        button: 'beleza!'
      });
    },
    
    error: function(){
      swal({
        title: "Whops! Houve um erro no cadastro",
        text: "Parece que você deixou de preencher algum campo do formulário :( Por favor, revise antes de enviar novamente",
        icon: "error",
        button: 'beleza!',
        dangerMode: true
      });
    },
  });  
};

$('#formulario_1').on('click', ()=>{

  formulario_1();
});

$('#formulario_2').on('click', ()=>{

  formulario_2();
});