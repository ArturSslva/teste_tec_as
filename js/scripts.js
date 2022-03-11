const lista = document.getElementById('lista');

const contactArea = document.querySelector('#area');
const commentsLounge = document.querySelector('#commentsLounge');

const comments = JSON.parse(localStorage.getItem('listComments')) || [];

const commentsList = JSON.parse(localStorage.getItem('listComments')) || [];

const tableBody = document.getElementById('table-body');

const content = {
  about:
    "<h1>Artur Santana</h1><h4>Estrada Campo Bom, 6200 - RS arturs.dasilva21@gmail.com - 51 99610478</h4><p>Eu sou um estudante buscando profundar meus conhecimentos e ingressar no mercado de trabalho!<br/>Meu maior interesse está nas áreas da tecnologia, principalmente em programação e desenvolvimento de software mas também aprecio literatura e fotografia em meu tempo livre.</p>",
  knowledge:
    "<h1>Conhecimentos</h1><p>* HTML Iniciante<br>* CSS Iniciante<br>* Javascript Iniciante<br>* Inglês intermediário(oral e escrito)</p>",
  objective:
    "<h1>Objetivos</h1><p>Projeto para o futuro o estabelecimento de uma verdadeira conexão, compromisso e imersão com cada projeto, buscando me aprimorar muito além de um bom código. Buscando consistentemente resultados melhores que os anteriores.</p>",
  lounge: ""
};

function onShowContent(event, contentSlug) {
  event.preventDefault();
  showContent(contentSlug);
}

function showContent(contentSlug) {
  const contentText = document.getElementById("content-text");

  switch (contentSlug) {
    case "about":
      contentText.innerHTML = content.about;
      contentText.setAttribute('style', 'display: block');
      commentsLounge.setAttribute('style', 'display: none');
      contactArea.setAttribute('style', 'display: none');
      lista.setAttribute('style', 'display: none');
      break;
    case "knowledge":
      contentText.innerHTML = content.knowledge;
      contentText.setAttribute('style', 'display: block');
      commentsLounge.setAttribute('style', 'display: none');
      contactArea.setAttribute('style', 'display: none');
      lista.setAttribute('style', 'display: none');
      break;
    case "objective":
      contentText.innerHTML = content.objective;
      contentText.setAttribute('style', 'display: block');
      commentsLounge.setAttribute('style', 'display: none');
      contactArea.setAttribute('style', 'display: none');
      lista.setAttribute('style', 'display: none');
    break;
    case "contact":
      contentText.setAttribute('style', 'display: none');
      commentsLounge.setAttribute('style', 'display: none');
      contactArea.setAttribute('style', 'display: block');
      lista.setAttribute('style', 'display: none');
    break;
    case "lounge": 
      contentText.setAttribute('style', 'display: none');
      contactArea.setAttribute('style', 'display: none');
      commentsLounge.setAttribute('style', 'display: block');
      lista.setAttribute('style', 'display: block');
    break;
  }
}

showContent("about");



async function getContent() {
  const response = await (await fetch('http://localhost:5502/')).json();
  console.log(response);
}

getContent();

function addComments() {
  if(document.getElementById('commentContent').value) {
    const comment = document.getElementById('commentContent').value;
    commentsList.push(comment);

    saveComments();
    showComments();
    document.getElementById('commentContent').value = '';
  }
}

function saveComments() {
  localStorage.setItem('listComments', JSON.stringify(commentsList));
}

function showComments() {
  console.log(commentsList);
  lista.innerHTML = '';
  for(item of commentsList){
    lista.innerHTML += `<li>Anom- ${item}</li>`;
  }
}

showComments();