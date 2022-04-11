const WebSocket  = require('ws')
const fetch = require('node-fetch')
var emitter = require('events').EventEmitter;
const util = require('util')
const ws = new WebSocket("wss://gateway.discord.gg/?v=9&encoding=json")
function Client(token) {
    var me = this;
let sequence = 0
let session_id = ''
let heartRec = true
const identifyPayload = {
    "op": 2,
    "d": {
        "token": token,
        "intents": 16383,
        "properties": {
            "$os": "linux",
            "$browser": "my_library",
            "$device": "my_library"
        }
    }
}

const heartPayload = {
    "op": 1,
    "d": "sequence"
}

const resumePayload = {
    "op": 6,
    "d": {
        "token": token,
        "session_id": "session_id",
        "seq": "sequence"
    }
}


function connect() {

    ws.on('open', function () {
  
        ws.on('message', function incoming(message) {
            evaluate(JSON.parse(message), ws)
        });
    })
    ws.on('close', function (code, reason) {
        
        heartRec = true
        reconnect(ws)
    })

}



function evaluate(message, ws) {
    const opcode = message.op
    switch (opcode) {
        case 10:
        
            const heartbeat_interval = message.d.heartbeat_interval
            heartbeat(heartbeat_interval, ws)
            if (session_id)
                resume(ws)
            else
                identify(ws)
            break
        case 11:
      
            heartRec = true
            break
        case 0:
            let t = message.t
            sequence = message.s
            if (t === 'READY')
                session_id = message.d.session_id
       
            break
        case 1:
          
            heartPayload.d = sequence
            ws.send(JSON.stringify(heartPayload))
            break
        default:
      
    }
}



function heartbeat(interval, ws) {
    const timer = setInterval(function () {
        if (heartRec) {
            heartPayload.d = sequence
            ws.send(JSON.stringify(heartPayload))
         
            heartRec = false
        }
        else {
           
            heartRec = true
            clearInterval(timer)
            reconnect(ws)
        }

    }, interval)
}


function identify(ws) {
    identifyPayload.d.token = token
    ws.send(JSON.stringify(identifyPayload))
}

function resume(ws) {
    resumePayload.d.token = token
    resumePayload.d.session_id = session_id
    resumePayload.d.seq = sequence
    ws.send(JSON.stringify(resumePayload))
}

function reconnect(ws) {

    ws.close()
    connect()
}


connect()
ws.addEventListener("message", function incomming(data) {
    var x = data.data;

    var payload = JSON.parse(x);
    const { t, event, op, d,s } = payload; 
    switch (t) {
        case "READY": 
        if(t === "READY"){ 
            setTimeout(function () { 
              me.emit('ready')
            } , 1)
          
            
          }
          break;
        case "MESSAGE_CREATE":

          setTimeout(function () { 
      
            function send(aa) {
     
      let URL = `https://discord.com/api/v9/channels/${d.channel_id}/messages`;
      var requestOptions = {
        method: 'POST',
        headers: {
         "Authorization": `Bot ${token}`,
         "Content-Type": "application/json"
    },
    body: JSON.stringify(aa)

};
fetch(URL, requestOptions)
.catch(err => new Error(err));

            }
                
         
            function dele() {
    
              let URL = `https://discord.com/api/v9/channels/${d.channel_id}/messages/${d.id}`;
              var requestOptions = {
                method: 'DELETE',
                headers: {
                 "Authorization": `Bot ${token}`,
                 "Content-Type": "application/json"
            },
        body: JSON.stringify({
          
            "tts": true,
        
        })
        
        
        };
        fetch(URL, requestOptions)
        .catch(err => new Error(err));
        
                    }
                    function pi() {
    
                      let URL = `https://discord.com/api/v9/channels/${d.channel_id}/pins/${d.id}`;
                      var requestOptions = {
                        method: 'PUT',
                        headers: {
                         "Authorization": `Bot ${token}`,
                         "Content-Type": "application/json"
                    },
                body: JSON.stringify({
                  
                    "tts": true,
                
                })
                
                
                };
                fetch(URL, requestOptions)
                .catch(err => new Error(err));
                
                            }
            d.send = send
            d.delete = dele
            d.pin = pi
            me.emit('messageCreate',d)
          } , 1)
      
           break;
          case "INTERACTION_CREATE":
            let URL = `https://discord.com/api/v9/interactions/${d.id}/${d.token}/callback`;
            function repl(content) {
   
                var requestOptions = {
                  method: 'POST',
                  headers: {
                   "Authorization": `Bot ${token}`,
                   "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  "type": 4,
                  "data": content,
              })
      };
  
      fetch(URL, requestOptions)
            .then(response => response.text())
            .then(console.log)
            .catch(console.error);
              }
              d.reply = repl
              function moddd(content) {
     
                var requestOptions = {
                  method: 'POST',
                  headers: {
                   "Authorization": `Bot ${token}`,
                   "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  "type": 9,
                  "data": content,
              })
      };
  
      fetch(URL, requestOptions)
            .then(response => response.text())
            .then(console.log)
            .catch(console.error);
              }
  function getttt(id) {
  
  let q1 = ''
  let q2 = ''
  let q3 = ''
  let q4 = ''
  let q5 = ''
  let qq1 = ''
  let qq2 = ''
  let qq3 = ''
  let qq4 = ''
  let qq5 = ''

if(d.data.components[0] === undefined) {
}else{
    q1 =   d.data.components[0].components[0].custom_id

    qq1 =   d.data.components[0].components[0].value
}
if(d.data.components[1] === undefined) {
}else{
    q2 =   d.data.components[1].components[0].custom_id
    
    qq2 =   d.data.components[1].components[0].value
}
if(d.data.components[2] === undefined) {
}else{
    q3 =   d.data.components[2].components[0].custom_id
    
    qq3 =   d.data.components[2].components[0].value
}
if(d.data.components[3] === undefined) {
}else{
    q4 =   d.data.components[3].components[0].custom_id
    
    qq4 =   d.data.components[3].components[0].value
}

if(d.data.components[4] === undefined) {
}else{
    q5 =   d.data.components[4].components[0].custom_id
    
    qq5 =   d.data.components[4].components[0].value
}



  
if(q1 === id) return qq1
if(q2 === id) return qq2
if(q3 === id) return qq3
if(q4 === id) return qq4
if(q5 === id) return qq5
  }        
  function dfr() {
   
    var requestOptions = {
      method: 'POST',
      headers: {
       "Authorization": `Bot ${token}`,
       "Content-Type": "application/json"
  },
  body: JSON.stringify({
      "type": 5,
      "data": {},
  })
};

fetch(URL, requestOptions)
.then(response => response.text())
.then(console.log)
.catch(console.error);
  }
  d.viewModal = moddd
  d.defferReply = dfr
  d.getTextValue = getttt
              me.emit('interactionCreate',d)
    }
    
})

}
util.inherits(Client, emitter)

module.exports = {Client};