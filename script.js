
function selectRoom(price){
localStorage.setItem("price",price)
location.href="payment.html"
}

function confirmPayment(){

const txn=document.getElementById("txn").value

if(txn.length<5){
alert("Enter valid payment reference")
return
}

fetch("https://api.telegram.org/bot7978570517:AAFiIU0B-Z0PhYSuhIsj0LozYUqp9CjNDZw/sendMessage",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
chat_id:"7011287841",
text:"New Payment Received\nTxn: "+txn
})
})

location.href="room.html"
}

function login(){

const email=document.getElementById("email").value
const pass=document.getElementById("pass").value

if(email==="opashishytff@gmail.com" && pass==="Ashish@2006"){
document.getElementById("panel").style.display="block"
alert("Login Success")
}else{
alert("Wrong Login")
}

}

function addRoom(){

const id=document.getElementById("roomid").value
const pass=document.getElementById("roompass").value

const li=document.createElement("li")
li.innerText="Room ID:"+id+" | Pass:"+pass

document.getElementById("roomlist").appendChild(li)

}


// Telegram Auto Room Send Feature
async function sendToTelegram(roomData) {
    const botToken = "bot7978570517:AAFiIU0B-Z0PhYSuhIsj0LozYUqp9CjNDZw";
    const chatId = "7011287841";

    const text = `New Room Created:%0AID: ${roomData.id}%0APassword: ${roomData.password}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

    try {
        await fetch(url);
        console.log("Sent to Telegram");
    } catch (e) {
        console.log("Telegram Error", e);
    }
}

// Example hook (call this when room is created)
function onRoomCreated(id, password){
    sendToTelegram({id, password});
}
