![alt text](https://cdn.discordapp.com/attachments/944961145582784582/963175287401615370/Picsart_22-04-11_23-34-21-010.jpg)
## Install 

```sh-session
npm i discord-arab
````
## Make A new Client : 
```js
const {Client} = require('discord-arab')
const client = new Client('your token')

client.on('ready' , () => {
  console.log('Super  Hero Bot Is Ready')
})
```


## Discord Modals
* Make A new Button Creator
```js
const {Client,EmbedCreateor,rowCreator,ModalRow,TextInput,buttonCreateor} = require('discord-arab')

client.on('messageCreate',message => {
  if(message.content === 'tst') {
  let row = new rowCreator()
  .addComponents(
    new buttonCreateor()
    .setCustomId('my_button')
     .setLabel('Click Here !!')
    .setStyle(1)
    
  )
  message.send({content : 'Hello Pong Ping !',components : [row.toJSON()]})
  }
  })
```
![alt text](https://cdn.discordapp.com/attachments/961272795642339358/963189157642010674/unknown.png)

* Receive Interactions
```js
client.on('interactionCreate',interaction => {
if(interaction.type === 3) {

  let modal = new ModalRow()
  .setLabel('MyFirst Modal')
  .setCustomId('modal')
  .addComponents(
new TextInput()
.setLabel("name")
.setStyle("short")
    .setPlaceholder('Click Me ')
.setCustomId("option1")
.setMax(10)
.setMin(2)
.setRequired(true),
new TextInput()
.setLabel("about_you")
.setStyle("paragraph")
.setCustomId("option2")
.setMax(100)
.setMin(10)
.setPlaceholder('Click Me ')
.setRequired(true),


)
interaction.viewModal(modal)
  }
})
  ```
  ![alt text](https://cdn.discordapp.com/attachments/960468656368808016/963189446222696478/unknown.png)
* Receive Modal InterAction
```js
client.on('interactionCreate',interaction = > {
  if(interaction.type === 5) {
  cosnt option1 = interaction.getTextValue('option1')
    cosnt option2 = interaction.getTextValue('option2')
  console.log(option1)
  console.log(option2)
  
  }
})
```