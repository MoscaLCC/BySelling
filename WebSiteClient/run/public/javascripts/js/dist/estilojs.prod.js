"use strict";function criarImagem1(){var e=document.createElement("LI"),t=document.createElement("FIGURE");t.setAttribute("class","foto-legenda");var o=document.createElement("IMG");o.setAttribute("src","images/upload/adima.png"),o.setAttribute("id","blah"),o.setAttribute("alt","your image");var n=document.createElement("FIGCAPTION");n.setAttribute("id","fc1");var r=document.createElement("LABLE");r.setAttribute("class","custom-file-upload");var a=document.createElement("INPUT");a.setAttribute("type","file"),a.setAttribute("style","display: none"),a.setAttribute("onchange","readURL(this)"),r.appendChild(a);r.append("Clique para adicionar"),n.appendChild(r),t.appendChild(o),t.appendChild(n),e.appendChild(t),document.getElementById("imagem").appendChild(e)}function limpa(){for(var e=document.getElementById("imagem");e.firstChild;)e.removeChild(e.firstChild)}function makeQuadro(){var e=document.getElementById("selec").options[document.getElementById("selec").selectedIndex].text;"Regular"==e&&(limpa(),criarImagem1()),"Horta"==e&&(limpa(),criarImagem1(),criarImagem1(),criarImagem1()),"Quinta"==e&&(limpa(),criarImagem1(),criarImagem1(),criarImagem1()),"Herdade"==e&&(limpa(),criarImagem1(),criarImagem1(),criarImagem1(),criarImagem1(),criarImagem1())}function readURL(e){if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){$("#blah").attr("src",e.target.result).width(150).height(150)},t.readAsDataURL(e.files[0])}}function updateSteptwo(){$("#step2").hasClass("progtrckr-done")?$("#step2").attr("class","progtrckr-todo"):$("#step2").attr("class","progtrckr-done")}function updateSteptree(){$("#step2").hasClass("progtrckr-done")?$("#step2").attr("class","progtrckr-todo"):$("#step3").attr("class","progtrckr-done")}function updateStepone(){$("#step2").hasClass("progtrckr-done")?$("#step2").attr("class","progtrckr-todo"):$("#step1").attr("class","progtrckr-done")}function updateStepfor(){$("#step2").hasClass("progtrckr-done")?$("#step2").attr("class","progtrckr-todo"):$("#step4").attr("class","progtrckr-done")}function updateStepfiv(){$("#step2").hasClass("progtrckr-done")?$("#step2").attr("class","progtrckr-todo"):$("#step5").attr("class","progtrckr-done")}function updateStepsix(){$("#step2").hasClass("progtrckr-done")?$("#step2").attr("class","progtrckr-todo"):$("#step6").attr("class","progtrckr-done")}function changeOpone(){var e=document.getElementById("lavar").checked;if(e||document.getElementById("branquear").checked||(document.getElementById("branquearop1").checked=!1,document.getElementById("branquearop2").checked=!1,document.getElementById("branquearop3").checked=!1),e||document.getElementById("branquear").checked){document.getElementById("lavar").checked=!1;for(var t=document.getElementById("branquearg");t.firstChild;)t.removeChild(t.firstChild);var o=document.createElement("label");o.setAttribute("class","checkbox");var n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("name","branquear"),n.setAttribute("id","branquear"),n.setAttribute("onchange","changeOpone()"),n.setAttribute("checked","true");var r=document.createElement("i");o.appendChild(n),o.append("Branquear"),o.appendChild(r),t.appendChild(o);var a=document.getElementById("branquearg"),d=document.createElement("input");d.setAttribute("type","checkbox"),d.setAttribute("name","branquearop1"),d.setAttribute("id","branquearop1"),d.setAttribute("onchange","changeOpbr1()"),d.setAttribute("checked","true"),a.appendChild(d);var i=document.createElement("i");a.appendChild(i),a.append("Branco");var c=document.createElement("br");a.appendChild(c);var s=document.createElement("input");s.setAttribute("type","checkbox"),s.setAttribute("name","branquearop2"),s.setAttribute("id","branquearop2"),s.setAttribute("onchange","changeOpbr2()"),a.appendChild(s);var u=document.createElement("i");a.appendChild(u),a.append("Meio Branco");var m=document.createElement("br");a.appendChild(m);var P=document.createElement("input");P.setAttribute("type","checkbox"),P.setAttribute("name","branquearop3"),P.setAttribute("id","branquearop3"),P.setAttribute("onchange","changeOpbr3()"),a.appendChild(P);var l=document.createElement("i");a.appendChild(l),a.append("BE");var p=document.createElement("br");a.appendChild(p)}}function changeOponed(){document.getElementById("branquear").checked=!1;for(var e=document.getElementById("branquearg");e.firstChild;)e.removeChild(e.firstChild);var t=document.createElement("label");t.setAttribute("class","checkbox");var o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("name","branquear"),o.setAttribute("id","branquear"),o.setAttribute("onchange","changeOpone()");var n=document.createElement("i");t.appendChild(o),t.append("Branquear"),t.appendChild(n),e.appendChild(t)}function changeOpbr1(){document.getElementById("branquearop1").checked?(document.getElementById("branquearop2").checked=!1,document.getElementById("branquearop3").checked=!1,document.getElementById("branquear").checked=!0):document.getElementById("branquear").checked=!1}function changeOpbr2(){document.getElementById("branquearop2").checked?(document.getElementById("branquearop3").checked=!1,document.getElementById("branquearop1").checked=!1,document.getElementById("branquear").checked=!0):document.getElementById("branquear").checked=!1}function changeOpbr3(){document.getElementById("branquearop3").checked?(document.getElementById("branquearop1").checked=!1,document.getElementById("branquearop2").checked=!1,document.getElementById("branquear").checked=!0):document.getElementById("branquear").checked=!1}function inserePonto(e){var t=document.createElement("option");t.append(e),document.getElementById("OpPonto").appendChild(t)}function inserePonto2(e){var t=document.createElement("option");t.append(e),document.getElementById("CompNome").appendChild(t)}function changetintd(){document.getElementById("Cubas").checked=!1,document.getElementById("Pigmentos").checked=!1}function changetintdd(){document.getElementById("Reativos").checked=!1,document.getElementById("Pigmentos").checked=!1}function changetintddd(){document.getElementById("Cubas").checked=!1,document.getElementById("Reativos").checked=!1}function criaelemtinte(e,t,o){var n=document.createElement("div");n.setAttribute("class","col-xs-3");var r=document.createElement("label");r.setAttribute("class","checkbox");var a=document.createElement("input");a.setAttribute("type","checkbox"),a.setAttribute("name",e),a.setAttribute("id",e),t&&a.setAttribute("onchange","updateSteptree(), "+o);var d=document.createElement("i");r.appendChild(a),r.appendChild(d),r.append(e),n.appendChild(r),document.getElementById("tintasg").appendChild(n)}function changeacab(){document.getElementById("acabar").checked=!1}function changeacabz(){document.getElementById("secar").checked=!1}function changecaland(){document.getElementById("calandq").checked||document.getElementById("calandf").checked?document.getElementById("calandar").checked=!0:document.getElementById("calandar").checked=!1}function containsPoli(){-1<document.getElementById("CompComp").options[document.getElementById("CompComp").selectedIndex].text.indexOf("Poliéster")?($("#reativosP").removeAttr("disabled"),$("#cubasP").removeAttr("disabled"),$("#pigmentosP").removeAttr("disabled"),$("#dispersosP").removeAttr("disabled")):($("#reativos").removeAttr("disabled"),$("#cubas").removeAttr("disabled"),$("#pigmentos").removeAttr("disabled"))}function listaPonto(){inserePonto("Ponto de Haste"),inserePonto("Ponto de Alinhavo"),inserePonto("Ponto de ãlinhavo Enlaçado"),inserePonto("Ponto Atrás"),inserePonto("Ponto Pequinês"),inserePonto("Ponto de Repôlego ou de Amarra"),inserePonto("Cordonê"),inserePonto("Ponto de Haste Português"),inserePonto("Ponto de Laçadas Cruzadas"),inserePonto("Ponto Partido"),inserePonto("Ponto Reto"),inserePonto("Ponto Cheio"),inserePonto("Ponto Matiz"),inserePonto("Ponto Chato"),inserePonto("Ponto Folha"),inserePonto("Ponto Pétala"),inserePonto("Ponto Renascença"),inserePonto("Ponto Pé de Galinha"),inserePonto("Ponto Russo"),inserePonto("Ponto Atrás Duplo ou de Sombra"),inserePonto("Ponto em Ziguezague"),inserePonto("Ponto Cruz"),inserePonto("Ponto Ilhóses"),inserePonto("Ponto de Casear"),inserePonto("Ponto de Casear Fechado"),inserePonto("Ponto de Casear em Pares"),inserePonto("Ponto de Casear em Nó"),inserePonto("Ponto de Casear e Palitos de Ponto de Casear Duplo"),inserePonto("Ponto de Casear com Picô"),inserePonto("Ponto de Aresta"),inserePonto("Ponto de Aresta Fechado"),inserePonto("Ponto de Folhinhas"),inserePonto("Ponto de Laçada"),inserePonto("Ponto de Vandyke"),inserePonto("Ponto Escada"),inserePonto("Ponto Trançado"),inserePonto("Ponto Trançado Aberto"),inserePonto("Ponto de Mosca"),inserePonto("Ponto de Cadeia"),inserePonto("Ponto de Margarida"),inserePonto("Ponto de Cadeia Torcido"),inserePonto("Ponto de Cadeia Aberto"),inserePonto("Ponto de Cadeia Sólido"),inserePonto("Ponto de Cadeia Xadrez"),inserePonto("Ponto de Elos"),inserePonto("Ponto de Elos em Ziguezague"),inserePonto("Ponto de Roseta"),inserePonto("Ponto Espiga"),inserePonto("Ponto Nózinhos Franceses"),inserePonto("Ponto Rococó"),inserePonto("Ponto Coral"),inserePonto("Ponto Biquinhos em Ponto de Nó"),inserePonto("Ponto de Nó Duplo ou Palestrina"),inserePonto("Ponto de Elos em Nóó"),inserePonto("Ponto de Aresta Espanhol com Nó"),inserePonto("Ponto Apanhado ou fio estendido presos por pontinhos"),inserePonto("Ponto Apanhado Rumeno"),inserePonto("Ponto Brocatelo"),inserePonto("Ponto Apanhado Jacobino"),inserePonto("Ponto Cobertura em Ponto Feixes"),inserePonto("Ponto de Areia"),inserePonto("Ponto Cobertura em Tela de Aranha"),inserePonto("Ponto Entrelaçado"),inserePonto("Ponto Barra Entrelaçada"),inserePonto("Ponto Cruz Malteza"),inserePonto("Ponto Barra Ponto Português"),inserePonto("Ponto Barra Suspensa de Ponto Cadeia"),inserePonto("Ponto Barra de Listras Tecidas"),inserePonto("Ponto Entremeio em ponto de Casear"),inserePonto("Ponto Entremeio em ponto Torcido"),inserePonto("Ponto Entremeio em ponto de Nó"),inserePonto("Ponto Anjour"),inserePonto("Ponto Anjour Escadinha"),inserePonto("Ponto Anjour Ziguezague"),inserePonto("Ponto Anjour Italiano"),inserePonto("Ponto Anjour Entrelaçado"),inserePonto("Ponto Cobertura de Elos de Ponto Atrás"),inserePonto("Ponto Cobertura em Forma de Onda"),inserePonto("Ponto Triangular"),inserePonto("Ponto Cobertura em Forma de Casa de Abelha"),inserePonto("Ponto Quadrilátero"),inserePonto("Ponto Meio Ponto Turco"),inserePonto("Ponto Punção"),inserePonto("Ponto de Cerzir"),inserePonto("Ponto Barras Enroladas"),inserePonto("Ponto Barras Cerzidas"),inserePonto("Ponto Barras Cerzidas com Picô Simples"),inserePonto("Ponto Ilhós em Forma de Estrela"),inserePonto("Ponto Tramado Partido"),inserePonto("Ponto Gros Tramado"),inserePonto("Ponto Petit ou Oblíquo"),inserePonto("Ponto Atrás Enrolado"),inserePonto("Ponto de Médici"),inserePonto("Ponto de Cruz Duplo"),inserePonto("Ponto Trançado Eslavo ou Arraiolos"),inserePonto("Ponto de Cruz de Duas Vistas"),inserePonto("Ponto Atado"),inserePonto("Ponto Barra Diagonal Ascendente"),inserePonto("Ponto Cobertura em Forma de Mosaico"),inserePonto("Ponto Florentino"),inserePonto("Ponto Tijolo")}function listaPonto2(e){e.forEach(function(e){inserePonto2(e)})}