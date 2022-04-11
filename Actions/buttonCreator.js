(function() {
    "use strict";
    class buttonCreateor {
        setCustomId(id){
          if(typeof id != "string") throw new Error("The id must be string")
          this.id = id
          return this
        }

        setLabel(label){
            if(typeof label != "string") throw new Error("The labelmust be string")
            this.label = label
            return this
          }
          setStyle(style){
          
            this.style = style
            return this
          }

        toJSON() {
            return {
                type : 2,
                custom_id:this.id,
              label:this.label,
              style:this.style
              
            };
          }
    }

    module.exports = buttonCreateor;
}).call(this);