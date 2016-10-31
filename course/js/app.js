var hello = new Vue({
    el:'#hello',
    // para declarar variaveis
    data: {
        msg: "Hello Vue!",
        pessoas: [
            {nome: "Maria"},
            {nome: "Pedro"},
            {nome: "Isabela"},
            {nome: "Jessica"},
            {nome: "Amanda"}
        ],
        newElement:'',
        elements: [],

        objectA: {
            'font-size':'30px'
        },
        objectB: {
            color: "green"
        }

    },

    // para declarar os metodos
    methods:{
        addElement: function(e){
            var title = this.newElement.trim(); // trim tira os espaços
            if(title){
                this.elements.push({title:title});

                this.newElement = "";
            }
        },

        removeElement: function(e, index){
            e.preventDefault();
            this.elements.splice(index, 1); // splice remove/add itens no array dependendo do que passa nos parametros dele
        },

        myClick: function(){
            alert('click');
        },

        myKeyUp: function(){
            alert('myKeyUp');
        }
    }
});