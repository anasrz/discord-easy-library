(function() {
    "use strict";
    class rowCreator {
    
    
        addComponents(...components){
            let anas = []
            let componentsArr = [...components]
            componentsArr.forEach(x => anas.push(x.toJSON()))
            this.components = anas
           return this
        }
        toJSON() {
            return {
                type : 1,
              components: this.components
            };
          }
    }

    module.exports = rowCreator;
}).call(this);