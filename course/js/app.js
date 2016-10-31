var hello = new Vue({
    el:'#hello',
    // para criar variaveis
    data: {
        msg: "Hello Vue!",
        pessoas: [
            {nome: "Maria"},
            {nome: "Pedro"},
            {nome: "Isabela"},
            {nome: "Jessica"},
            {nome: "Amanda"}
        ]
    }
});