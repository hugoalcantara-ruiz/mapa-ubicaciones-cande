var size = 0;
var placement = 'point';

var style_Nuestrasubicaciones_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    
    // --- ESTILO DEFINITIVO (ICONO VERDE CANDE) ---
    // Usamos 'ol.style.Text' con FontAwesome en lugar de una imagen PNG/SVG.
    // Esto permite usar códigos de color hexadecimales exactos.

    var style = [ new ol.style.Style({
        text: new ol.style.Text({
            // 1. Fuente: Usamos la librería FontAwesome cargada en index.html
            font: '900 35px "Font Awesome 5 Free"', 
            
            // 2. Icono: El código unicode del marcador de mapa
            text: '\uf3c5', 
            
            // 3. Color de Relleno (Verde Solicitado)
            fill: new ol.style.Fill({
                color: '#a8f22a' 
            }),
            
            // 4. Color de Borde (Azul para contraste y elegancia)
            stroke: new ol.style.Stroke({
                color: '#1a679a', 
                width: 1
            }),
            
            // 5. Alineación: Movemos el icono hacia arriba para que la punta toque la ubicación
            offsetY: -15, 
            
            // 6. Sombra opcional (técnica para mejorar renderizado)
            padding: [2, 2, 2, 2]
        })
    })];

    return style;
};