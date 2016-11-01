var app = new Vue({
    el:'#app',
   // para declarar variaveis
    data: {

        books: [],

        MySearch: ''

/*        msg: "Hello Vue!",
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
        },

        myListForm: [],

        myForm: {
            name: '',
            email: ''
        }*/

    },

    // para declarar os metodos
    methods: {

/*        addElement: function(e){
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
        },

        addForm: function () {
            this.myListForm.push({name: this.myForm.name, email: this.myForm.email});
            this.myForm.name = '';
            this.myForm.email = '';
        }*/
    },

    // ready executa as coisas dentro dele assim que inicializa a página
    ready: function(){

        var self = this; // Para não perder a referencia do this, criou essa variavel e atribuiu o valor dele nela

        self.$http.get('dataServer.json').then(function(response){

            //console.log(response);

            self.books = response.data; // assim já tem a lista na variavel books
        });
    }
});