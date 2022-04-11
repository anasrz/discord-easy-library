(function() {
    "use strict";
    class TextInput {
        constructor(){
            this.components = [{type:4}]
        }
        setLabel(label){
          if(typeof label != "string") throw new Error("The label must be string","TextInput")
          this.components[0].label = label
          return this;
        }
        setPlaceholder(placeholder){
            this.components[0].placeholder = placeholder
            return this;
        }
        setCustomId(custom_id){
            this.components[0].custom_id = custom_id
            return this;
        }
        setDefaultValue(value){
            this.components[0].value = value
            return this;
        }
        setStyle(style){{
            if(typeof style == "number") {
                this.components[0].style = style
                return this;
            } else {
                this.components[0].style = style.toLowerCase() == "short" ? 1 : style.toLowerCase() == "paragraph" ? 2 : 1
            }
            return this;
        }

        }
        setRequired(required){
            this.components[0].required = required
            return this;
        }
        setMin(length){
            this.components[0].min_length = length
            return this;
        }
        setMax(length){
            if(typeof length != "number") throw new Error("The length must be number","TextInputField")
            this.components[0].max_length = length
            return this;
        }
        toJSON(){
            return {
                type:1,
                components:this.components
            }
        }
    }

    module.exports = TextInput;
}).call(this);