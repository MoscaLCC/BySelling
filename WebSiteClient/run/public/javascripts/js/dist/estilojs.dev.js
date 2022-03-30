"use strict";

function criarImagem1() {
  var h = document.createElement("LI");
  var a = document.createElement("FIGURE");
  a.setAttribute("class", "foto-legenda");
  var b = document.createElement("IMG");
  b.setAttribute("src", "images/upload/adima.png");
  b.setAttribute("id", "blah");
  b.setAttribute("alt", "your image");
  var c = document.createElement("FIGCAPTION");
  c.setAttribute("id", "fc1");
  var d = document.createElement("LABLE");
  d.setAttribute("class", "custom-file-upload");
  var e = document.createElement("INPUT");
  e.setAttribute("type", "file");
  e.setAttribute("style", "display: none");
  e.setAttribute("onchange", "readURL(this)");
  d.appendChild(e);
  var j = "Clique para adicionar";
  d.append(j);
  c.appendChild(d);
  a.appendChild(b);
  a.appendChild(c);
  h.appendChild(a);
  document.getElementById("imagem").appendChild(h);
}

function limpa() {
  var myNode = document.getElementById("imagem");

  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

function makeQuadro() {
  var z = document.getElementById("selec").options[document.getElementById("selec").selectedIndex].text;
  var num = 0;

  if (z == "Regular") {
    limpa();
    criarImagem1();
  }

  if (z == "Horta") {
    limpa();
    criarImagem1();
    criarImagem1();
    criarImagem1();
  }

  if (z == "Quinta") {
    limpa();
    criarImagem1();
    criarImagem1();
    criarImagem1();
  }

  if (z == "Herdade") {
    limpa();
    criarImagem1();
    criarImagem1();
    criarImagem1();
    criarImagem1();
    criarImagem1();
  }
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result).width(150).height(150);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function updateSteptwo() {
  if ($('#step2').hasClass("progtrckr-done")) {
    $('#step2').attr("class", "progtrckr-todo");
  } else {
    $('#step2').attr("class", "progtrckr-done");
  }
}

function updateSteptree() {
  if ($('#step2').hasClass("progtrckr-done")) {
    $('#step2').attr("class", "progtrckr-todo");
  } else {
    $('#step3').attr("class", "progtrckr-done");
  }
}

function updateStepone() {
  if ($('#step2').hasClass("progtrckr-done")) {
    $('#step2').attr("class", "progtrckr-todo");
  } else {
    $('#step1').attr("class", "progtrckr-done");
  }
}

function updateStepfor() {
  if ($('#step2').hasClass("progtrckr-done")) {
    $('#step2').attr("class", "progtrckr-todo");
  } else {
    $('#step4').attr("class", "progtrckr-done");
  }
}

function updateStepfiv() {
  if ($('#step2').hasClass("progtrckr-done")) {
    $('#step2').attr("class", "progtrckr-todo");
  } else {
    $('#step5').attr("class", "progtrckr-done");
  }
}

function updateStepsix() {
  if ($('#step2').hasClass("progtrckr-done")) {
    $('#step2').attr("class", "progtrckr-todo");
  } else {
    $('#step6').attr("class", "progtrckr-done");
  }
}

function changeOpone() {
  var xx = document.getElementById("lavar").checked;

  if (!xx && !document.getElementById("branquear").checked) {
    document.getElementById("branquearop1").checked = false;
    document.getElementById("branquearop2").checked = false;
    document.getElementById("branquearop3").checked = false;
  }

  if (xx || document.getElementById("branquear").checked) {
    document.getElementById("lavar").checked = false;
    var myNodea = document.getElementById("branquearg");

    while (myNodea.firstChild) {
      myNodea.removeChild(myNodea.firstChild);
    }

    var aa = document.createElement('label');
    aa.setAttribute("class", "checkbox");
    var bb = document.createElement('input');
    bb.setAttribute("type", "checkbox");
    bb.setAttribute("name", "branquear");
    bb.setAttribute("id", "branquear");
    bb.setAttribute("onchange", "changeOpone()");
    bb.setAttribute("checked", "true");
    var cc = document.createElement('i');
    aa.appendChild(bb);
    aa.append("Branquear");
    aa.appendChild(cc);
    myNodea.appendChild(aa);
    var myNode = document.getElementById("branquearg");
    var a = document.createElement('input');
    a.setAttribute("type", "checkbox");
    a.setAttribute("name", "branquearop1");
    a.setAttribute("id", "branquearop1");
    a.setAttribute("onchange", "changeOpbr1()");
    a.setAttribute("checked", "true");
    myNode.appendChild(a);
    var b = document.createElement('i');
    myNode.appendChild(b);
    myNode.append("Branco");
    var c = document.createElement('br');
    myNode.appendChild(c);
    var d = document.createElement('input');
    d.setAttribute("type", "checkbox");
    d.setAttribute("name", "branquearop2");
    d.setAttribute("id", "branquearop2");
    d.setAttribute("onchange", "changeOpbr2()");
    myNode.appendChild(d);
    var e = document.createElement('i');
    myNode.appendChild(e);
    myNode.append("Meio Branco");
    var f = document.createElement('br');
    myNode.appendChild(f);
    var g = document.createElement('input');
    g.setAttribute("type", "checkbox");
    g.setAttribute("name", "branquearop3");
    g.setAttribute("id", "branquearop3");
    g.setAttribute("onchange", "changeOpbr3()");
    myNode.appendChild(g);
    var h = document.createElement('i');
    myNode.appendChild(h);
    myNode.append("BE");
    var i = document.createElement('br');
    myNode.appendChild(i);
  }
}

function changeOponed() {
  document.getElementById("branquear").checked = false;
  var myNode = document.getElementById("branquearg");

  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  var a = document.createElement('label');
  a.setAttribute("class", "checkbox");
  var b = document.createElement('input');
  b.setAttribute("type", "checkbox");
  b.setAttribute("name", "branquear");
  b.setAttribute("id", "branquear");
  b.setAttribute("onchange", "changeOpone()");
  var c = document.createElement('i');
  a.appendChild(b);
  a.append("Branquear");
  a.appendChild(c);
  myNode.appendChild(a);
}

function changeOpbr1() {
  if (document.getElementById("branquearop1").checked) {
    document.getElementById("branquearop2").checked = false;
    document.getElementById("branquearop3").checked = false;
    document.getElementById("branquear").checked = true;
  } else {
    document.getElementById("branquear").checked = false;
  }
}

function changeOpbr2() {
  if (document.getElementById("branquearop2").checked) {
    document.getElementById("branquearop3").checked = false;
    document.getElementById("branquearop1").checked = false;
    document.getElementById("branquear").checked = true;
  } else {
    document.getElementById("branquear").checked = false;
  }
}

function changeOpbr3() {
  if (document.getElementById("branquearop3").checked) {
    document.getElementById("branquearop1").checked = false;
    document.getElementById("branquearop2").checked = false;
    document.getElementById("branquear").checked = true;
  } else {
    document.getElementById("branquear").checked = false;
  }
}

function inserePonto(a) {
  var z = document.createElement('option');
  z.append(a);
  document.getElementById("OpPonto").appendChild(z);
}

function inserePonto2(a) {
  var z = document.createElement('option');
  z.append(a);
  document.getElementById("CompNome").appendChild(z);
}

function changetintd() {
  document.getElementById("Cubas").checked = false;
  document.getElementById("Pigmentos").checked = false;
}

function changetintdd() {
  document.getElementById("Reativos").checked = false;
  document.getElementById("Pigmentos").checked = false;
}

function changetintddd() {
  document.getElementById("Cubas").checked = false;
  document.getElementById("Reativos").checked = false;
}

function criaelemtinte(a, w, xx) {
  var b = document.createElement('div');
  b.setAttribute("class", "col-xs-3");
  var c = document.createElement('label');
  c.setAttribute("class", "checkbox");
  var d = document.createElement('input');
  d.setAttribute("type", "checkbox");
  d.setAttribute("name", a);
  d.setAttribute("id", a);

  if (w) {
    d.setAttribute("onchange", "updateSteptree(), " + xx);
  }

  var e = document.createElement('i');
  c.appendChild(d);
  c.appendChild(e);
  c.append(a);
  b.appendChild(c);
  document.getElementById("tintasg").appendChild(b);
}

function changeacab() {
  document.getElementById("acabar").checked = false;
}

function changeacabz() {
  document.getElementById("secar").checked = false;
}

function changecaland() {
  if (document.getElementById("calandq").checked || document.getElementById("calandf").checked) {
    document.getElementById("calandar").checked = true;
  } else {
    document.getElementById("calandar").checked = false;
  }
}

function containsPoli() {
  var a = document.getElementById("CompComp").options[document.getElementById("CompComp").selectedIndex].text;

  if (a.indexOf("Poliéster") > -1) {
    $('#reativosP').removeAttr("disabled");
    $('#cubasP').removeAttr("disabled");
    $('#pigmentosP').removeAttr("disabled");
    $('#dispersosP').removeAttr("disabled");
  } else {
    $('#reativos').removeAttr("disabled");
    $('#cubas').removeAttr("disabled");
    $('#pigmentos').removeAttr("disabled");
  }
}

function listaPonto() {
  inserePonto("Ponto de Haste");
  inserePonto("Ponto de Alinhavo");
  inserePonto("Ponto de ãlinhavo Enlaçado");
  inserePonto("Ponto Atrás");
  inserePonto("Ponto Pequinês");
  inserePonto("Ponto de Repôlego ou de Amarra");
  inserePonto("Cordonê");
  inserePonto("Ponto de Haste Português");
  inserePonto("Ponto de Laçadas Cruzadas");
  inserePonto("Ponto Partido");
  inserePonto("Ponto Reto");
  inserePonto("Ponto Cheio");
  inserePonto("Ponto Matiz");
  inserePonto("Ponto Chato");
  inserePonto("Ponto Folha");
  inserePonto("Ponto Pétala");
  inserePonto("Ponto Renascença");
  inserePonto("Ponto Pé de Galinha");
  inserePonto("Ponto Russo");
  inserePonto("Ponto Atrás Duplo ou de Sombra");
  inserePonto("Ponto em Ziguezague");
  inserePonto("Ponto Cruz");
  inserePonto("Ponto Ilhóses");
  inserePonto("Ponto de Casear");
  inserePonto("Ponto de Casear Fechado");
  inserePonto("Ponto de Casear em Pares");
  inserePonto("Ponto de Casear em Nó");
  inserePonto("Ponto de Casear e Palitos de Ponto de Casear Duplo");
  inserePonto("Ponto de Casear com Picô");
  inserePonto("Ponto de Aresta");
  inserePonto("Ponto de Aresta Fechado");
  inserePonto("Ponto de Folhinhas");
  inserePonto("Ponto de Laçada");
  inserePonto("Ponto de Vandyke");
  inserePonto("Ponto Escada");
  inserePonto("Ponto Trançado");
  inserePonto("Ponto Trançado Aberto");
  inserePonto("Ponto de Mosca");
  inserePonto("Ponto de Cadeia");
  inserePonto("Ponto de Margarida");
  inserePonto("Ponto de Cadeia Torcido");
  inserePonto("Ponto de Cadeia Aberto");
  inserePonto("Ponto de Cadeia Sólido");
  inserePonto("Ponto de Cadeia Xadrez");
  inserePonto("Ponto de Elos");
  inserePonto("Ponto de Elos em Ziguezague");
  inserePonto("Ponto de Roseta");
  inserePonto("Ponto Espiga");
  inserePonto("Ponto Nózinhos Franceses");
  inserePonto("Ponto Rococó");
  inserePonto("Ponto Coral");
  inserePonto("Ponto Biquinhos em Ponto de Nó");
  inserePonto("Ponto de Nó Duplo ou Palestrina");
  inserePonto("Ponto de Elos em Nóó");
  inserePonto("Ponto de Aresta Espanhol com Nó");
  inserePonto("Ponto Apanhado ou fio estendido presos por pontinhos");
  inserePonto("Ponto Apanhado Rumeno");
  inserePonto("Ponto Brocatelo");
  inserePonto("Ponto Apanhado Jacobino");
  inserePonto("Ponto Cobertura em Ponto Feixes");
  inserePonto("Ponto de Areia");
  inserePonto("Ponto Cobertura em Tela de Aranha");
  inserePonto("Ponto Entrelaçado");
  inserePonto("Ponto Barra Entrelaçada");
  inserePonto("Ponto Cruz Malteza");
  inserePonto("Ponto Barra Ponto Português");
  inserePonto("Ponto Barra Suspensa de Ponto Cadeia");
  inserePonto("Ponto Barra de Listras Tecidas");
  inserePonto("Ponto Entremeio em ponto de Casear");
  inserePonto("Ponto Entremeio em ponto Torcido");
  inserePonto("Ponto Entremeio em ponto de Nó");
  inserePonto("Ponto Anjour");
  inserePonto("Ponto Anjour Escadinha");
  inserePonto("Ponto Anjour Ziguezague");
  inserePonto("Ponto Anjour Italiano");
  inserePonto("Ponto Anjour Entrelaçado");
  inserePonto("Ponto Cobertura de Elos de Ponto Atrás");
  inserePonto("Ponto Cobertura em Forma de Onda");
  inserePonto("Ponto Triangular");
  inserePonto("Ponto Cobertura em Forma de Casa de Abelha");
  inserePonto("Ponto Quadrilátero");
  inserePonto("Ponto Meio Ponto Turco");
  inserePonto("Ponto Punção");
  inserePonto("Ponto de Cerzir");
  inserePonto("Ponto Barras Enroladas");
  inserePonto("Ponto Barras Cerzidas");
  inserePonto("Ponto Barras Cerzidas com Picô Simples");
  inserePonto("Ponto Ilhós em Forma de Estrela");
  inserePonto("Ponto Tramado Partido");
  inserePonto("Ponto Gros Tramado");
  inserePonto("Ponto Petit ou Oblíquo");
  inserePonto("Ponto Atrás Enrolado");
  inserePonto("Ponto de Médici");
  inserePonto("Ponto de Cruz Duplo");
  inserePonto("Ponto Trançado Eslavo ou Arraiolos");
  inserePonto("Ponto de Cruz de Duas Vistas");
  inserePonto("Ponto Atado");
  inserePonto("Ponto Barra Diagonal Ascendente");
  inserePonto("Ponto Cobertura em Forma de Mosaico");
  inserePonto("Ponto Florentino");
  inserePonto("Ponto Tijolo");
}

function listaPonto2(list) {
  list.forEach(function (element) {
    inserePonto2(element);
  });
}