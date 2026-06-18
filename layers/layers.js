ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_0.png" /> <br />\
    <img src="styles/legend/aksesibilitas_univunion_1_1.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_2.png" /> 2,4km (30 menit)<br />' });
var format_PTNDISURABAYA_2 = new ol.format.GeoJSON();
var features_PTNDISURABAYA_2 = format_PTNDISURABAYA_2.readFeatures(json_PTNDISURABAYA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNDISURABAYA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNDISURABAYA_2.addFeatures(features_PTNDISURABAYA_2);
var lyr_PTNDISURABAYA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNDISURABAYA_2, 
                style: style_PTNDISURABAYA_2,
                popuplayertitle: 'PTN DI SURABAYA',
                interactive: true,
    title: 'PTN DI SURABAYA<br />\
    <img src="styles/legend/PTNDISURABAYA_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNDISURABAYA_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNDISURABAYA_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNDISURABAYA_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNDISURABAYA_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNDISURABAYA_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNDISURABAYA_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNDISURABAYA_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNDISURABAYA_2_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNDISURABAYA_2_9.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_PTNDISURABAYA_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_aksesibilitas_univunion_1,lyr_PTNDISURABAYA_2];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNDISURABAYA_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Ranking ': 'Ranking ', 'Tahun Berdiri': 'Tahun Berdiri', 'Fakultas': 'Fakultas', 'foto': 'foto', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNDISURABAYA_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Ranking ': 'TextEdit', 'Tahun Berdiri': '', 'Fakultas': '', 'foto': 'ExternalResource', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'header label - always visible', 'Access': 'inline label - always visible', });
lyr_PTNDISURABAYA_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Ranking ': 'no label', 'Tahun Berdiri': 'no label', 'Fakultas': 'no label', 'foto': 'header label - visible with data', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNDISURABAYA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});