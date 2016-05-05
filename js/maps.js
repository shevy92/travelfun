function makemap(data) {

            L.mapbox.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
            var map = L.mapbox.map('map', 'mapbox.streets')
              .setView([30, 20], 2);


            omnivore.csv('data/accomodations.csv')
                .on('ready', function(layer) {

                    this.eachLayer(function(marker) {
                        //low rankings
                        if (marker.toGeoJSON().properties.Overall_Ranking > 99 && marker.toGeoJSON().properties.Average >99) {  
                            marker.setIcon(L.mapbox.marker.icon({
                                'marker-color': '#473433',
                                'marker-size': 'small',

                            }));
                        } 
                            if (marker.toGeoJSON().properties.Overall_Ranking > 99 && marker.toGeoJSON().properties.Average <100 && marker.toGeoJSON().properties.Average >50) {  
                                marker.setIcon(L.mapbox.marker.icon({
                                    'marker-color': '#C2B4B2',
                                    'marker-size': 'small',

                                }));
                            } 
                                if (marker.toGeoJSON().properties.Overall_Ranking > 99 && marker.toGeoJSON().properties.Average <51) {  
                                    marker.setIcon(L.mapbox.marker.icon({
                                        'marker-color': '#8D82BD',
                                        'marker-size': 'small',

                                    }));
                                } 

                        //medium rankings
                        if (marker.toGeoJSON().properties.Overall_Ranking < 100 && marker.toGeoJSON().properties.Overall_Ranking > 50 && marker.toGeoJSON().properties.Average >99) {  
                            marker.setIcon(L.mapbox.marker.icon({
                                'marker-color': '#473433',
                                'marker-size': 'small'
                            }));
                        }
                            if (marker.toGeoJSON().properties.Overall_Ranking < 100 && marker.toGeoJSON().properties.Overall_Ranking > 50 && marker.toGeoJSON().properties.Average <100 && marker.toGeoJSON().properties.Average >50) {  
                                marker.setIcon(L.mapbox.marker.icon({
                                    'marker-color': '#C2B4B2',
                                    'marker-size': 'small'
                                }));
                            }
                                if (marker.toGeoJSON().properties.Overall_Ranking < 100 && marker.toGeoJSON().properties.Overall_Ranking > 50 && marker.toGeoJSON().properties.Average <51) {  
                                    marker.setIcon(L.mapbox.marker.icon({
                                        'marker-color': '#8D82BD',
                                        'marker-size': 'small'
                                    }));
                                }

                        //high rankings
                        if (marker.toGeoJSON().properties.Overall_Ranking < 51 && marker.toGeoJSON().properties.Average >99) {  
                            marker.setIcon(L.mapbox.marker.icon({
                                'marker-color': '#473433',
                                'marker-size': 'small'
                            }));
                        }
                            if (marker.toGeoJSON().properties.Overall_Ranking < 51 && marker.toGeoJSON().properties.Average <100 && marker.toGeoJSON().properties.Average >50) {  
                                marker.setIcon(L.mapbox.marker.icon({
                                    'marker-color': '#8D82BD',
                                    'marker-size': 'small'
                                }));
                            }
                                if (marker.toGeoJSON().properties.Overall_Ranking < 51 && marker.toGeoJSON().properties.Average <51) {  
                                    marker.setIcon(L.mapbox.marker.icon({
                                        'marker-color': '#C2B4B2',
                                        'marker-size': 'small'
                                    }));
                                }


                        /*
                        else {
                            marker.setIcon(L.mapbox.marker.icon({}));
                        }
                        */
                        // Bind a popup to each icon based on the same properties
                        marker.bindPopup(marker.toGeoJSON().properties.City + ', ' + marker.toGeoJSON().properties.Country + '<br> Price Ranking: ' +
                            marker.toGeoJSON().properties.Overall_Ranking + '/150 <br> Average per Night: $' + marker.toGeoJSON().properties.Average);
                        marker.on('mouseover', function (e) {
                            this.openPopup();
                        });
                        marker.on('mouseout', function (e) {
                            this.closePopup();
                        });
                    });
                
            
                    map.scrollWheelZoom.disable();
                })
            
            
            
    
    
                .addTo(map);
}