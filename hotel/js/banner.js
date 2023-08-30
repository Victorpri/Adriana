var conetenedor = $('#caja');
var siguiente = $('#btn-adelante');
var anterior = $('#btn-atras');

$('#caja .section_caja:last').insertBefore('#caja .section_caja:first');

conetenedor.css('margin-left', '-'+100+'%');

function derecha() {
    conetenedor.animate({
        marginLeft: '-'+200+'%'
    },700,function(){
        $('#caja .section_caja:first').insertAfter('#caja .section_caja:last');
        conetenedor.css('margin-left', '-'+100+'%');
    });
}

function izquierda() {
    conetenedor.animate({
        marginLeft:0
    },700, function(){
        $('#caja .section_caja:last').insertBefore('#caja .section_caja:first');
        conetenedor.css('margin-left', '-'+100+'%');
    });
}

function automatico(){
    interval = setInterval(function(){
        derecha();
    }, 5000);
}

siguiente.on('click',function(){
    derecha();
    clearInterval(interval);
    automatico();
});

anterior.on('click',function(){
    izquierda();
    clearInterval(interval);
    automatico();
});

automatico();

