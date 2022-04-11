

(function() {
    "use strict";
    class EmbedCreateor {
        constructor(){
            this.components = [{type:4}]
        }
        setTitle(title){
          if(typeof title != "string") throw new Error("embed title must be string")
          this.title = title
          return this;
        }
        setColor(color){
            const resolve = require('./resolvecolor')
            if(typeof color != "string") throw new Error("embed Color must be string")
            console.log(color)
            this.color = resolve(color)
            return this;
          }
        setDescription(description){
            if(typeof description != "string") throw new Error("embed description must be string")
            this.description = description
            return this;
          }
          setThumbnail(thumbnail){
            if(typeof thumbnail != "string") throw new Error("embed thumbnail must be string")
            this.thumbnail = thumbnail
            return this;
          }
            addField({name,value,inline}){
            if(typeof name != "string" || typeof value != "string") throw new Error("name or vlaue must be string",)
            this.name = name,
           this.value = value,
           this.inline = inline
      

           return this
          }
        
         setFooter(text,image){
           this.ftext = text,
          this.fimage = image

         
      

           return this
          }
          setAuthor(text,image){
            this.atext = text,
           this.aimage = image
 
          
       
 
            return this
           }
           setImage(image){
            
           this.image = image
 
          
       
 
            return this
           }
        toJSON(){
            return {
               
                title:this.title,
                fields:{
                    name : this.name,
                    value : this.value,
                    inline : this.inline
                },
                description : this.description,
                thumbnail : {url : this.thumbnail},
                footer : {text : this.ftext,icon_url : this.fimage},
                author : {name : this.atext , url : this.aimage},
                image : {url : this.image},
                color : this.color
            }
        }
    }

    module.exports = EmbedCreateor;
}).call(this);