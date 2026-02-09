ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-92.240235, 13.738420, -88.221455, 17.818688]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_municipios_wgs84_2 = new ol.format.GeoJSON();
var features_municipios_wgs84_2 = format_municipios_wgs84_2.readFeatures(json_municipios_wgs84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_municipios_wgs84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_wgs84_2.addFeatures(features_municipios_wgs84_2);
var lyr_municipios_wgs84_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_wgs84_2, 
                style: style_municipios_wgs84_2,
                popuplayertitle: 'municipios_wgs84',
                interactive: false,
                title: '<img src="styles/legend/municipios_wgs84_2.png" /> municipios_wgs84'
            });
var format_Departamento_wgs84_3 = new ol.format.GeoJSON();
var features_Departamento_wgs84_3 = format_Departamento_wgs84_3.readFeatures(json_Departamento_wgs84_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Departamento_wgs84_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_wgs84_3.addFeatures(features_Departamento_wgs84_3);
var lyr_Departamento_wgs84_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_wgs84_3, 
                style: style_Departamento_wgs84_3,
                popuplayertitle: 'Departamento_wgs84',
                interactive: false,
                title: '<img src="styles/legend/Departamento_wgs84_3.png" /> Departamento_wgs84'
            });
var format_Nuestrasubicaciones_4 = new ol.format.GeoJSON();
var features_Nuestrasubicaciones_4 = format_Nuestrasubicaciones_4.readFeatures(json_Nuestrasubicaciones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Nuestrasubicaciones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nuestrasubicaciones_4.addFeatures(features_Nuestrasubicaciones_4);
cluster_Nuestrasubicaciones_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Nuestrasubicaciones_4
});
var lyr_Nuestrasubicaciones_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Nuestrasubicaciones_4, 
                style: style_Nuestrasubicaciones_4,
                popuplayertitle: 'Nuestras ubicaciones',
                interactive: true,
                title: '<img src="styles/legend/Nuestrasubicaciones_4.png" /> Nuestras ubicaciones'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_municipios_wgs84_2.setVisible(true);lyr_Departamento_wgs84_3.setVisible(true);lyr_Nuestrasubicaciones_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_municipios_wgs84_2,lyr_Departamento_wgs84_3,lyr_Nuestrasubicaciones_4];
lyr_municipios_wgs84_2.set('fieldAliases', {'Municipio': 'Municipio', 'Cod_Dep': 'Cod_Dep', 'Departamen': 'Departamen', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Codigo_Mun': 'Codigo_Mun', 'Area_Kmts': 'Area_Kmts', 'Hectareas': 'Hectareas', 'REG': 'REG', });
lyr_Departamento_wgs84_3.set('fieldAliases', {'REG_NUM': 'REG_NUM', 'REGION': 'REGION', 'DEPARTAMEN': 'DEPARTAMEN', 'COUNT': 'COUNT', 'AREAKM2': 'AREAKM2', 'POBLACION': 'POBLACION', 'Codigo_Dep': 'Codigo_Dep', });
lyr_Nuestrasubicaciones_4.set('fieldAliases', {'Tipo de pr': 'Tipo de pr', 'Dirección': 'Dirección', 'Telefono': 'Telefono', });
lyr_municipios_wgs84_2.set('fieldImages', {'Municipio': 'TextEdit', 'Cod_Dep': 'TextEdit', 'Departamen': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Codigo_Mun': 'TextEdit', 'Area_Kmts': 'TextEdit', 'Hectareas': 'TextEdit', 'REG': 'TextEdit', });
lyr_Departamento_wgs84_3.set('fieldImages', {'REG_NUM': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'COUNT': 'TextEdit', 'AREAKM2': 'TextEdit', 'POBLACION': 'TextEdit', 'Codigo_Dep': 'TextEdit', });
lyr_Nuestrasubicaciones_4.set('fieldImages', {'Tipo de pr': 'TextEdit', 'Dirección': 'TextEdit', 'Telefono': 'TextEdit', });
lyr_municipios_wgs84_2.set('fieldLabels', {'Municipio': 'no label', 'Cod_Dep': 'no label', 'Departamen': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Codigo_Mun': 'no label', 'Area_Kmts': 'no label', 'Hectareas': 'no label', 'REG': 'no label', });
lyr_Departamento_wgs84_3.set('fieldLabels', {'REG_NUM': 'no label', 'REGION': 'no label', 'DEPARTAMEN': 'no label', 'COUNT': 'no label', 'AREAKM2': 'no label', 'POBLACION': 'no label', 'Codigo_Dep': 'no label', });
lyr_Nuestrasubicaciones_4.set('fieldLabels', {'Tipo de pr': 'header label - always visible', 'Dirección': 'header label - always visible', 'Telefono': 'header label - always visible', });
lyr_Nuestrasubicaciones_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});