const words = new URLSearchParams(window.location.search);
const emailValue= words.get('email');

console.log(emailValue);

const story = `<p>A <span class="word" title="id:email">${emailValue}</span> </p>`;
const textNode = document.createTextNode("Hello World");


document.getElementById('confirm').innerHTML = `A confirmation email has been sent to <span style=font-weight:bold>${emailValue}</span>. please open it and click the button inside to confirm your subscription.`;


document.getElementById('dismiss').addEventListener(onclick,function(){
    document.location.href ='index.html';
});