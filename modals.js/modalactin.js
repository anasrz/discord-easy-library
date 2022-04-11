(function() {
    "use strict";
    class ModalRow {
        setLabel(title){
          this.tilte = title
          return this
        }
        setCustomId(custom_id){
            this.custom_id = custom_id
            return this
        }
        addComponents(...components){
            let anas = []
            let componentsArr = [...components]
            componentsArr.forEach(x => anas.push(x.toJSON()))
            this.components = anas
           return this
        }
        toJSON() {
            return {
              title:this.tilte,
              custom_id: this.custom_id,
              components: this.components
            };
          }
    }

    module.exports = ModalRow;
}).call(this);