import io from 'socket.io-client';
// make sure you are in WIFI - IMPACTHUB_NYC_Friends
// That is where socketIO server

const socket = io.connect('localhost:5000');

export let sendMessage = (roomName, message) => {
    socket.emit(roomName, message);
}

export let listenMessage = (roomName, callback) => {
    socket.on(roomName, (data)=> {
        callback(data);
    });
}

// for roomName there are three options: 'room' 'room1' 'room2'
// server will broadcast to all listener, even the sender
// example:
// A Client:
// listenMessage('room', (data)=>{ console.log(data) });
// B Client:
// listenMessage('room', (data)=>{ console.log(data) });
// sendMessage('room', {id:1, message: 'hello'}); // A and B Client would get : console.log({id:1, message: 'hello'});