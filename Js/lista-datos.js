var valuedata;
var MetaTitle = document.getElementById('MetaTitle');
var imgprogres = document.getElementById('imgprogres');
var Color = document.getElementById('color-pro');
var Color2 = document.getElementById('color-pro2');
var progre = document.getElementById('progre');
var barra = document.getElementById('barra');
var cuenta = document.getElementById('cuenta-info');
var descripcionMeta = document.getElementById('descripcionMeta');
var moneda = document.getElementById('moneda');
var btnIncre = document.getElementById('btn-incre');
var restantes = document.getElementById('restantes');
var inicial = document.getElementById('inicial');
var final = document.getElementById('final');
var saldo = document.getElementById('saldo');
var deseado = document.getElementById('deseado');
var tiposaldo = document.getElementById('tiposaldo');

// $(function () {

//     $(".progresc").each(function () {
//         // var value = progre;
//         var value = $(this).attr('data-value');
//         var left = $(this).find('.progresc-left .progresc-bar');
//         var right = $(this).find('.progresc-right .progresc-bar');

//         if (value > 0) {
//             if (value <= 50) {
//                 right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
//                 left.css('transform', 'rotate(0deg)')
//             } else {
//                 right.css('transform', 'rotate(180deg)')
//                 left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
//             }
//         }

//     })
//     function percentageToDegrees(percentage) {
    
//             return percentage / 100 * 360
//         }
    
//     });
    
    
    ListaMetas();

function ListaMetas() {
    var lista = document.getElementById('content-items');
    fetch('Js/datos.json')
        .then(data => data.json())
        .then(data => {
            data.forEach(element => {
                if (element.estadoMeta == "B") {
                    lista.innerHTML += `
                    <div class="contenedor-item-metas" onclick="ListaCuentas(${element.idMeta})">
                        <div class="content-tex-cuenta">
                            <h4> Cuenta: <b style="color: #d7282f;"> ${element.Cuenta}</b></h4>
                            <p>Saldo: <b style=" color:#d7282f;">L.${element.saldo}</b></p>
                        </div>
                            <div class="boton">
                                <button data-toggle="modal" data-target="#agregar" ><i class="fas fa-plus"></i></button>
                            </div>
                    </div>
                    ` } else {
                    lista.innerHTML += `
                   <div id="${element.idMeta}" class="contenedor-item-metas" onclick="info(${element.idMeta})">
                       
                        <div class="barraprogreso" style="background-image: url(${element.bgProgres});">
                            <div class="progresc mx-auto" data-value="${element.porcentajeMeta}">
                                <span class="progresc-left">
                                    <span class="progresc-bar" style="border-color: ${element.colorPg};"></span>
                                </span>
                                <span class="progresc-right">
                                    <span class="progresc-bar" style="border-color: ${element.colorPg};"></span>
                                </span>
                                <div
                                    class="progresc-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                </div>
                            </div>
                        </div>
                        <div class="content-tex">
                            <h4>${element.tipoMeta}</h4>
                            <p> <b style="color:${element.colorPg};">L.${element.saldo}</b> - ${element.Cuenta}</p>
                        </div>
                        <div class="h2" style="color: ${element.colorPg};">${element.porcentajeMeta}%</div>
                         <div class="boton edit">
                                <button><i class="fas fa-pencil-alt" type="button" class="btn btn-primary" data-toggle="modal" data-target="#Edit" onclick="editModal(${element.tipoMeta})"></i></button>
                            </div>
                    </div>
                    `
                    
                    
                    
                    
                    $(function(){
            
            
                        $(".progresc").each(function () {
                            // var val = element.porcentajeMeta;
                            var value = $(this).attr('data-value');
                            console.log(element.porcentajeMeta)
                            var left = $(this).find('.progresc-left .progresc-bar');
                            var right = $(this).find('.progresc-right .progresc-bar');
            
                            if (value > 0) {
                                if (value <= 50) {
                                    right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                                    left.css('transform', 'rotate(0deg)')
                                } else {
                                    right.css('transform', 'rotate(180deg)')
                                    left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                                }
                               
                            }
            
                        })
                        function percentageToDegrees(percentage) {
            
                            return percentage / 100 * 360
                        }
            
                    });
                }
                    
                    
                    
                })
            })
            
            
        }
        

function ListaCuentas(c) {
    var saldoc = document.getElementById('saldo');
    var deseadoc = document.getElementById('deseado');
    var agreg = document.getElementById('btn-incre');
    fetch('Js/datos.json')
        .then(data => data.json(c))
        .then(data => {
            data.forEach(elem => {

                agreg.innerHTML = "<a href='' class='incrementa' style='background-color:#d7282f'>+ Crear Meta </a>";

                MetaTitle.innerHTML = "Agrega una nueva cuenta!";
                imgprogres.style.backgroundImage = "";

                Color.style.borderColor = '';
                Color2.style.borderColor = '';
                progre.dataset.value = '';
                cuenta.innerHTML = data[c].Cuenta;
                barra.style.backgroundColor = '';
                barra.style.width = "";
                // barra.dataset.title = '';
                descripcionMeta.innerHTML = '';
                // moneda.innerHTML = 'cv';
                restantes.innerHTML = '';
                inicial.innerHTML = "";
                final.innerHTML = "";
                saldoc.innerHTML = "L." + data[c].saldo;;
                deseadoc.innerHTML = "";
                tiposaldo.innerHTML = "";


            });


            // console.log(data[u].Meta);  
            // MetaTitle.innerHTML = `  ${elementt.Meta}`

        });


}


function info(u) {

    fetch('Js/datos.json')
        .then(data => data.json(u))
        .then(data => {
            data.forEach(elementt => {



                MetaTitle.innerHTML = data[u].tipoMeta;
                imgprogres.style.backgroundImage = "url(" + data[u].bgProgres + ")";
                Color.style.borderColor = data[u].colorPg;
                Color2.style.borderColor = data[u].colorPg;
                progre.dataset.value = data[u].porcentajeMeta;
                cuenta.innerHTML = data[u].Cuenta;
                barra.style.backgroundColor = data[u].colorPg;
                barra.style.width = data[u].porcentajeMeta + '%';
                barra.dataset.title = "Progreso de " + data[u].porcentajeMeta + '%';
                descripcionMeta.innerHTML = data[u].descripcionMeta;
                // moneda.innerHTML = data[u].moneda;
                Color.style.borderColor = data[u].colorPg;
                restantes.innerHTML = data[u].diasRestantes;
                inicial.innerHTML = data[u].fechaCreacionMeta;
                final.innerHTML = data[u].fechaFinal;
                saldo.innerHTML = "L." + data[u].saldo;
                btnIncre.innerHTML = "<a href='' class='incrementa' style='background-color:" + data[u].colorPg + " '>+ incrementa tu meta</a>";
                deseado.innerHTML = "L." + data[u].montoDeseado;
                tiposaldo.innerHTML = data[u].tipoSaldo;

                $(function () {

                    $(".progress").each(function () {

                        var valor = $(this).attr('data-value');
                        var left = $(this).find('.progress-left .progress-bar');
                        var right = $(this).find('.progress-right .progress-bar');

                        if (valor > 0) {
                            if (valor <= 50) {
                                right.css('transform', 'rotate(' + percentageToDegrees(valor) + 'deg)')
                                left.css('transform', 'rotate(0deg)')
                            } else {
                                right.css('transform', 'rotate(180deg)')
                                left.css('transform', 'rotate(' + percentageToDegrees(valor - 50) + 'deg)')
                            }
                        }
                    })
                    function percentageToDegrees(percentage) {
                        return percentage / 100 * 360
                    }
                });
            });


            // console.log(data[u].Meta);  
            // MetaTitle.innerHTML = `  ${elementt.Meta}`

        });




}

info(0);

function editModal(e) {

    var titleedit = document.getElementById("exampleModalLabel");
    titleedit.innerHTML = 'editar meta' + e;
}