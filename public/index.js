
const chatConsole = document.querySelector('.chat-console')
var myMsg = ''
var socket = io();

socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});


socket.addEventListener('serverMessage', function (data) {
    createMsg(data,'server-messege')
    console.log('Message from server ', data);
});

//


const form = document.querySelector('.form-msg')

form.addEventListener('submit',function(event){
    event.preventDefault()
    var msg =  event.target.msg.value
    createMsg(msg,'my-messege')
    socket.emit("chatMessage",msg)
    myMsg = msg
})


function createMsg(data,myClass){
    const myDiv = document.createElement('div')
    myDiv.classList.add('msg')
    const myMsg = document.createElement('h3')
    myMsg.classList.add(myClass)
    myMsg.innerText =data
    myDiv.appendChild(myMsg)
    chatConsole.appendChild(myDiv)
}