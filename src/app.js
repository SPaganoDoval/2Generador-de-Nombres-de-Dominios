/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(){
  //write your code here
  var pronoun = ['the','our'];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];
  var dominio = ['.com', '.net', '.org'];

  let textHTML = '<ul>'

  for (let i = 0; i< pronoun.length; i++) {
    for (let j = 0;  j< adj.length; j++) {
      for (let k = 0;  k< noun.length; k++) {
        for (let l = 0;  l< dominio.length; l++) {
    
    const element1 = pronoun[i];
    const element2 = adj[j];
    const element3 = noun[k];
    const element4 = dominio[l];

    let domainName = element1 + element2 + element3 + element4 ;
    textHTML += '<li class="list-group-item">' + domainName +  '</li>';
    
  }
}
  }
}
  let element= document.querySelector('#domain');
element.innerHTML=textHTML;
}
