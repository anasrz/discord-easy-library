const {Client,EmbedCreateor,rowCreator,buttonCreateor} = require('./route.js')
const express = require('express')
const app = express()

app.listen(3030)

const client = new Client('OTE3Mzg2MjgwNDA3NTY0MzI4.Ya38jQ._ri5IN22wbcs7_d4YGN236Dy6ok')

client.on('ready', () => {
   console.log('ready')
})
client.on('messageCreate',message => {
   if(message.author.bot) return;

if(message.content === 'hello') {
   let embed = new EmbedCreateor()
.setTitle('test')
   message.send({content : 'pong',embeds : [embed.toJSON()] })
}
})


let embed = new EmbedCreateor()
.setTitle('test')


client.on('interactionCreate', interaction => {
   let embed = new EmbedCreateor()
   .setTitle('test')
   const row = new rowCreator()

.addComponents(
  new buttonCreateor()
  .setLabel('tst')
.setStyle(1)
  .setCustomId('tt'),
  new buttonCreateor()
  .setLabel('tstqq')
.setStyle(1)
  .setCustomId('tta')
)

 interaction.reply({content : 'pong',embeds : [embed] ,components : [row.toJSON()]})
})














