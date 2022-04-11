
///let client = new Client('OTE3Mzg2MjgwNDA3NTY0MzI4.Ya38jQ._ri5IN22wbcs7_d4YGN236Dy6ok')

var emitter = require('events').EventEmitter;
var WebSocket = require('ws')
var util = require('util'); 
const fetch = require('node-fetch')




var ws = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json");

function Client(token) {
 
    var me = this; 
    setTimeout(function () {  
    payload = {
      op: 2,
      d: {
          token: token,
          intents: 513,
          properties: {
              $os: 'linux',
              $browser: 'chrome',
              $device: 'chrome'
          },
          presence: {
         
              status: "online",
              since: 91879201,
              afk: false
          },
      }
  }

const heartbeat = (ms) => {
  return setInterval(() => {
      ws.send(JSON.stringify(payload))
  }, ms)
}
ws.addEventListener("open", function open(x) {
  setTimeout(function () { 
   

  ws.send(JSON.stringify(payload));
} , 1)
});

ws.addEventListener("end", function open(x) {
  setTimeout(function () { 
   

  ws.send(JSON.stringify(payload));
} , 1)
});

ws.addEventListener("message", function incomming(data) {
  var x = data.data;

  var payload = JSON.parse(x);
  const { t, event, op, d } = payload; 

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
              console.log(aa)
     
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
            me.emit('interactionCreate',d)
  }

})
} , 1)

}

util.inherits(Client, emitter)

module.exports = {Client};

///module.exports = ws;