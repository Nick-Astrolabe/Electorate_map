var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_RegisterofNativeTitleClaims_2 = new ol.format.GeoJSON();
var features_RegisterofNativeTitleClaims_2 = format_RegisterofNativeTitleClaims_2.readFeatures(json_RegisterofNativeTitleClaims_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegisterofNativeTitleClaims_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegisterofNativeTitleClaims_2.addFeatures(features_RegisterofNativeTitleClaims_2);
var lyr_RegisterofNativeTitleClaims_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RegisterofNativeTitleClaims_2, 
                style: style_RegisterofNativeTitleClaims_2,
                interactive: true,
                title: '<img src="styles/legend/RegisterofNativeTitleClaims_2.png" /> Register of Native Title Claims'
            });
var format_LocalGovernmentArea2020_3 = new ol.format.GeoJSON();
var features_LocalGovernmentArea2020_3 = format_LocalGovernmentArea2020_3.readFeatures(json_LocalGovernmentArea2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalGovernmentArea2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalGovernmentArea2020_3.addFeatures(features_LocalGovernmentArea2020_3);
var lyr_LocalGovernmentArea2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalGovernmentArea2020_3, 
                style: style_LocalGovernmentArea2020_3,
                interactive: true,
                title: '<img src="styles/legend/LocalGovernmentArea2020_3.png" /> Local Government Area 2020'
            });
var format_NSWElectorateBoundary2013_4 = new ol.format.GeoJSON();
var features_NSWElectorateBoundary2013_4 = format_NSWElectorateBoundary2013_4.readFeatures(json_NSWElectorateBoundary2013_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NSWElectorateBoundary2013_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NSWElectorateBoundary2013_4.addFeatures(features_NSWElectorateBoundary2013_4);
var lyr_NSWElectorateBoundary2013_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NSWElectorateBoundary2013_4, 
                style: style_NSWElectorateBoundary2013_4,
                interactive: true,
                title: '<img src="styles/legend/NSWElectorateBoundary2013_4.png" /> NSW Electorate Boundary 2013'
            });
var format_FederalElectorateBoundary2021_5 = new ol.format.GeoJSON();
var features_FederalElectorateBoundary2021_5 = format_FederalElectorateBoundary2021_5.readFeatures(json_FederalElectorateBoundary2021_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FederalElectorateBoundary2021_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FederalElectorateBoundary2021_5.addFeatures(features_FederalElectorateBoundary2021_5);
var lyr_FederalElectorateBoundary2021_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FederalElectorateBoundary2021_5, 
                style: style_FederalElectorateBoundary2021_5,
                interactive: true,
                title: '<img src="styles/legend/FederalElectorateBoundary2021_5.png" /> Federal Electorate Boundary 2021'
            });
var format_Electoraldistrictsfor2023Stateelection_6 = new ol.format.GeoJSON();
var features_Electoraldistrictsfor2023Stateelection_6 = format_Electoraldistrictsfor2023Stateelection_6.readFeatures(json_Electoraldistrictsfor2023Stateelection_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Electoraldistrictsfor2023Stateelection_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Electoraldistrictsfor2023Stateelection_6.addFeatures(features_Electoraldistrictsfor2023Stateelection_6);
var lyr_Electoraldistrictsfor2023Stateelection_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Electoraldistrictsfor2023Stateelection_6, 
                style: style_Electoraldistrictsfor2023Stateelection_6,
                interactive: true,
                title: '<img src="styles/legend/Electoraldistrictsfor2023Stateelection_6.png" /> Electoral districts for 2023 State election'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_RegisterofNativeTitleClaims_2.setVisible(true);lyr_LocalGovernmentArea2020_3.setVisible(true);lyr_NSWElectorateBoundary2013_4.setVisible(true);lyr_FederalElectorateBoundary2021_5.setVisible(true);lyr_Electoraldistrictsfor2023Stateelection_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_RegisterofNativeTitleClaims_2,lyr_LocalGovernmentArea2020_3,lyr_NSWElectorateBoundary2013_4,lyr_FederalElectorateBoundary2021_5,lyr_Electoraldistrictsfor2023Stateelection_6];
lyr_RegisterofNativeTitleClaims_2.set('fieldAliases', {'TRIBID': 'TRIBID', 'NAME': 'NAME', 'FCNO': 'FCNO', 'DATELODGED': 'DATELODGED', 'STATUS': 'STATUS', 'DATESTATUS': 'DATESTATUS', 'RTSTATUS': 'RTSTATUS', 'DATERTDEC': 'DATERTDEC', 'DATEREG': 'DATEREG', 'DATENTRI': 'DATENTRI', 'DATENOTNCL': 'DATENOTNCL', 'DATEFCORD': 'DATEFCORD', 'COMBINED': 'COMBINED', 'PARENTNO': 'PARENTNO', 'REP': 'REP', 'APPLTYPE': 'APPLTYPE', 'AREASQKM': 'AREASQKM', 'DATASOURCE': 'DATASOURCE', 'DATECURR': 'DATECURR', 'SEACLAIM': 'SEACLAIM', 'ZONELWM': 'ZONELWM', 'ZONE3NM': 'ZONE3NM', 'ZONE12NM': 'ZONE12NM', 'ZONE24NM': 'ZONE24NM', 'ZONEEEZ': 'ZONEEEZ', 'NNTTSEQNO': 'NNTTSEQNO', 'SPTIALNOTE': 'SPTIALNOTE', 'JURIS': 'JURIS', 'OVERLAP': 'OVERLAP', 'DT_EXTRACT': 'DT_EXTRACT', });
lyr_LocalGovernmentArea2020_3.set('fieldAliases', {'LGA_CODE20': 'LGA_CODE20', 'LGA_NAME20': 'LGA_NAME20', 'STE_CODE16': 'STE_CODE16', 'STE_NAME16': 'STE_NAME16', 'AREASQKM20': 'AREASQKM20', });
lyr_NSWElectorateBoundary2013_4.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Electors': 'Electors', 'ProjectedPopulation': 'ProjectedPopulation', 'Members': 'Members', 'ElectorDeviation': 'ElectorDeviation', 'ProjectedDeviation': 'ProjectedDeviation', });
lyr_FederalElectorateBoundary2021_5.set('fieldAliases', {'E_div_numb': 'E_div_numb', 'Elect_div': 'Elect_div', 'Numccds': 'Numccds', 'Actual': 'Actual', 'Projected': 'Projected', 'Area_SqKm': 'Area_SqKm', 'Sortname': 'Sortname', });
lyr_Electoraldistrictsfor2023Stateelection_6.set('fieldAliases', {'Name': 'Name', });
lyr_RegisterofNativeTitleClaims_2.set('fieldImages', {'TRIBID': 'TextEdit', 'NAME': 'TextEdit', 'FCNO': 'TextEdit', 'DATELODGED': 'DateTime', 'STATUS': 'TextEdit', 'DATESTATUS': 'DateTime', 'RTSTATUS': 'TextEdit', 'DATERTDEC': 'DateTime', 'DATEREG': 'DateTime', 'DATENTRI': 'DateTime', 'DATENOTNCL': 'DateTime', 'DATEFCORD': 'DateTime', 'COMBINED': 'TextEdit', 'PARENTNO': 'TextEdit', 'REP': 'TextEdit', 'APPLTYPE': 'TextEdit', 'AREASQKM': 'TextEdit', 'DATASOURCE': 'TextEdit', 'DATECURR': 'DateTime', 'SEACLAIM': 'TextEdit', 'ZONELWM': 'TextEdit', 'ZONE3NM': 'TextEdit', 'ZONE12NM': 'TextEdit', 'ZONE24NM': 'TextEdit', 'ZONEEEZ': 'TextEdit', 'NNTTSEQNO': 'TextEdit', 'SPTIALNOTE': 'TextEdit', 'JURIS': 'TextEdit', 'OVERLAP': 'TextEdit', 'DT_EXTRACT': 'DateTime', });
lyr_LocalGovernmentArea2020_3.set('fieldImages', {'LGA_CODE20': 'TextEdit', 'LGA_NAME20': 'TextEdit', 'STE_CODE16': 'TextEdit', 'STE_NAME16': 'TextEdit', 'AREASQKM20': 'TextEdit', });
lyr_NSWElectorateBoundary2013_4.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Electors': 'Range', 'ProjectedPopulation': 'Range', 'Members': 'Range', 'ElectorDeviation': 'TextEdit', 'ProjectedDeviation': 'TextEdit', });
lyr_FederalElectorateBoundary2021_5.set('fieldImages', {'E_div_numb': 'TextEdit', 'Elect_div': 'TextEdit', 'Numccds': 'TextEdit', 'Actual': 'TextEdit', 'Projected': 'TextEdit', 'Area_SqKm': 'TextEdit', 'Sortname': 'TextEdit', });
lyr_Electoraldistrictsfor2023Stateelection_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_RegisterofNativeTitleClaims_2.set('fieldLabels', {'TRIBID': 'header label', 'NAME': 'header label', 'FCNO': 'header label', 'DATELODGED': 'header label', 'STATUS': 'header label', 'DATESTATUS': 'header label', 'RTSTATUS': 'header label', 'DATERTDEC': 'header label', 'DATEREG': 'header label', 'DATENTRI': 'header label', 'DATENOTNCL': 'header label', 'DATEFCORD': 'header label', 'COMBINED': 'header label', 'PARENTNO': 'header label', 'REP': 'header label', 'APPLTYPE': 'header label', 'AREASQKM': 'header label', 'DATASOURCE': 'header label', 'DATECURR': 'header label', 'SEACLAIM': 'header label', 'ZONELWM': 'header label', 'ZONE3NM': 'header label', 'ZONE12NM': 'header label', 'ZONE24NM': 'header label', 'ZONEEEZ': 'header label', 'NNTTSEQNO': 'header label', 'SPTIALNOTE': 'header label', 'JURIS': 'header label', 'OVERLAP': 'header label', 'DT_EXTRACT': 'header label', });
lyr_LocalGovernmentArea2020_3.set('fieldLabels', {'LGA_CODE20': 'no label', 'LGA_NAME20': 'inline label', 'STE_CODE16': 'no label', 'STE_NAME16': 'no label', 'AREASQKM20': 'no label', });
lyr_NSWElectorateBoundary2013_4.set('fieldLabels', {'ID': 'header label', 'Name': 'header label', 'Electors': 'header label', 'ProjectedPopulation': 'header label', 'Members': 'header label', 'ElectorDeviation': 'header label', 'ProjectedDeviation': 'header label', });
lyr_FederalElectorateBoundary2021_5.set('fieldLabels', {'E_div_numb': 'header label', 'Elect_div': 'header label', 'Numccds': 'header label', 'Actual': 'header label', 'Projected': 'header label', 'Area_SqKm': 'header label', 'Sortname': 'header label', });
lyr_Electoraldistrictsfor2023Stateelection_6.set('fieldLabels', {'Name': 'header label', });
lyr_Electoraldistrictsfor2023Stateelection_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});