var app = new Vue({
    el:'#app',
   // para declarar variaveis
    data: {

        books: [],

        MySearch: '',

        orderCol: 'id',

        orderInverse: 1,

        pagination:{

            maxPage: 4,
            current: 1,
            totalItems: 0,
            totalPages: 0,
            listPagination: []
        }

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

        filterOrderBy: function (e, col) {

            e.preventDefault();
            this.orderCol = col;
            this.orderInverse = this.orderInverse * -1;

            console.log(this.orderInverse);
        },

        previous: function (e) {

            e.preventDefault();

            console.log('maxPage: ' + this.pagination.maxPage);
            console.log('current: ' + this.pagination.current);
            console.log('totalItems: ' + this.pagination.totalItems);
            console.log('totalPages: ' + this.pagination.totalPages);
            console.log('listPagination: ' + this.pagination.listPagination);

            if(this.pagination.current === 1){

                return false;
            }
            this.pagination.current = this.pagination.current - 1;

        },

        next: function (e) {

            e.preventDefault();

            console.log('maxPage: ' + this.pagination.maxPage);
            console.log('current: ' + this.pagination.current);
            console.log('totalItems: ' + this.pagination.totalItems);
            console.log('totalPages: ' + this.pagination.totalPages);
            console.log('listPagination: ' + this.pagination.listPagination);

            if(this.pagination.current === this.pagination.totalPages){

                return false;
            }
            this.pagination.current = this.pagination.current + 1;

        },

        pagePagination:function(e, id){

            e.preventDefault();

            console.log('maxPage: ' + this.pagination.maxPage);
            console.log('current: ' + this.pagination.current);
            console.log('totalItems: ' + this.pagination.totalItems);
            console.log('totalPages: ' + this.pagination.totalPages);
            console.log('listPagination: ' + this.pagination.listPagination);

        }

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

            self.pagination.totalItems = response.data.length;

            self.pagination.totalPages = Math.ceil(response.data.length / self.pagination.maxPage); // Math.ceil arredonda pra cima

            self.books = response.data; // assim já tem a lista na variavel books
        });
    }
});