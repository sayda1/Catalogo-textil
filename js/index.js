$(document).ready(init);

function init(){
    listaDePrendas();
}

var lista;
var lista2;
var lista3;
function listaDePrendas(){
    //------------LISTA------------------------
     lista =[
        {"img":"img/small/blusa-modelo2.png","Linea":"UNIFORMES", "Ropa":"Blusa manga corta", "Talla":"S/M/L","Ver":"blusa-modelos.html"},
        {"img":"img/small/camisa-modelo1.png","Linea":"UNIFORMES", "Ropa":"Manga manga larga", "Talla":"S/M/L","Ver":"camisa-modelos.html"},
        {"img":"img/small/casaca-modelo2.png","Linea":"CORPORATIVO","Ropa":"Casaca corporativa","Talla":"S/M/L","Ver":"#casaca-modelos.html"},
        {"img":"img/modelo-pantalon.jpg","Linea":"UNIFORMES","Ropa":"Pantalon","Talla":"S/M/L","Ver":"pantalon-algodon.html"},
    ];
    var carga ='';
    for (var i in lista){
        var html =
            '<div class="col-md-3 col-sm-3 col-xs-6"><div class="product"><img src="'+lista[i].img+'"><hr style="margin: 10px 0; border-top: 1px solid #ccc;" class="line">'+
            '<div class="text"><h5>Serie<span>'+lista[i].Linea+'</span></h5><p>'+lista[i].Ropa+'</p></div><hr classs="line"><p><strong>Talla:</strong>'+lista[i].Talla+'</p><hr><button>Ver detalles</button> <i class="fa fa-plus-circle"></i></div></div>';
        carga+=html;
        $("#lista1").html(carga);
    }
    
    //---------------LISTA----DOS-------------------
     lista2 =[
        {"img":"img/modelo-chompa.jpg","Linea":"CORPORATIVO","Ropa":"Chompa con cierre","Talla":"S/M/L","Ver":"#modelo-chompas"},
        {"img":"img/small/chaqueta-modelo1.png","Linea":"CORPORATIVO","Ropa":"Chaqueta con cierre","Talla":"S/M/L","Ver":"#modelo-chaquetas"},
        {"img":"img/modelo-saco.jpg","Linea":"CORPORATIVO","Ropa":"Saco de vestir","Talla":"S/M/L","Ver":"#modelo-sacos"},
        {"img":"img/modelo-polo.jpg","Linea":"SPORT","Ropa":"Polo cuello camisero","Talla":"S/M/L","Ver":"#modelo-polos"}
    ];
    var carga2 ='';
    for (var x in lista2){
        var html2 =
            '<div class="col-md-3 col-sm-3 col-xs-6"><div class="product"><img src="'+lista2[x].img+'"><hr style="margin: 10px 0; border-top: 1px solid #ccc;" class="line">'+
            '<div class="text"><h5>Serie<span>'+lista2[x].Linea+'</span></h5><p>'+lista2[x].Ropa+'</p></div><hr classs="line"><p><strong>Talla:</strong>'+lista2[x].Talla+'</p><hr><button>Ver detalles</button> <i class="fa fa-plus-circle"></i></div></div>';
        carga2+=html2;
        $("#lista2").html(carga2);
    }
    
    //-------------LISTA 3------------------
    
    lista3 =[
        {"img":"img/modelo-buzo.jpg","Linea":"SPORT","Ropa":"Buzo Completo","Talla":"S/M/L","Ver":"#modelo-chompas"},
        {"img":"img/modelo-polera.jpg","Linea":"SPORT","Ropa":"Polera","Talla":"S/M/L","Ver":"#modelo-chaquetas"},
        {"img":"img/modelo-mameluco.jpg","Linea":"INDUSTRIAL","Ropa":"Mameluco","Talla":"S/M/L","Ver":"#modelo-sacos"},
        {"img":"img/modelo-chaleco.jpg","Linea":"INDUSTRIAL","Ropa":"Chaleco","Talla":"S/M/L","Ver":"#modelo-polos"}
    ];
    
    var carga3 ='';
     for( var y in lista3){
        var html3 = '<div class="col-md-3 col-xs-6"><div class="product"><img src="'+lista3[y].img+'"><hr style="margin: 10px 0; border-top: 1px solid #ccc" class="line"><div class="text"><h5>Serie<span>'+lista3[y].Linea+'</span></h5><p>'+lista3[y].Ropa+'</p></div><hr classs="line"><p><strong>Talla:</strong>'+lista3[y].Talla+'</p><hr><button>Ver detalles</button> <i class="fa fa-plus-circle"></i></div></div>'
        
        carga3+=html3;
        $('#lista3').html(carga3);
    };
    /*var evento = $('button');
    evento.each(function(){
        $(this).click(onClick);
    });*/
}

/*function  onClick(evt){
    alert('hola mundo');    
    location.href= evt.currentTarget.list;
}*/
