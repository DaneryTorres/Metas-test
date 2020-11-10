


var tbnMenu = new Vue({
    el: '#btnmebtnmenunu',
    data: {
        menu: false
    },
    methods: {
        btnmenu: function () {
            this.menu = !this.menu;
        }
    }
})

// new Vue({
//     data: {
//         imagenMeta: function(){
// return[
//     { url: 'assets/Ahorro.svg' },
//     { url: 'assets/Casa.svg' },
//     { url: 'assets/Estudio.svg' },
//     { url: 'assets/Jubi.svg' },
//     { url: 'assets/Salud.svg' },
//     { url: 'assets/Viaje.svg' }
// ]

//         }
//     }
//   })



  var BTNcolor = new Vue({
    el: '#BTNboton',
    data: {
        color: true,
        gal: true,
        bordercolor: '#fff',
        direcimg: 'assets/Casa.svg',
        imagenMeta: [
            { url: 'assets/Ahorro.svg' },
            { url: 'assets/Casa.svg' },
            { url: 'assets/Estudio.svg' },
            { url: 'assets/Jubi.svg' },
            { url: 'assets/Salud.svg' },
            { url: 'assets/Viaje.svg' }
        ]
        
    },
    methods: {
        colores: function () {
            this.color = !this.color;
        },
        colorCambio: function (c) {
            this.bordercolor = c;
            this.color = true;
        },
        listaicon: function () {
            this.gal = !this.gal;
        },
        updateimg: function (img) {
            console.log(img);
            this.gal = true;
            this.direcimg = img;
        }

    }
})

var btnConsolidado = new Vue({
    el: '#btnConsolidado',
    data: {
        moneda: false
    },
    methods: {
        dolar: function () {
            this.moneda = true;
        },
        Lem: function () {
            this.moneda = false;
        }
    }
})

