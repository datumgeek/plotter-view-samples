define(["require", "exports"], function (require, exports) {
    "use strict";
    var Uswind = (function () {
        function Uswind() {
            this.colDef = {
                x: 18,
                y: 17,
                FID: 0,
                unique_id: 1,
                site_name: 2,
                total_turb: 3,
                on_year: 4,
                year_range: 5,
                on_year_s: 6,
                manufac: 7,
                model: 8,
                type_tower: 9,
                decommiss: 10,
                MW_turbine: 11,
                total_cpcy: 12,
                total_ht: 13,
                tower_h: 14,
                blade_l: 15,
                rotor_dia: 16,
                rotor_s_a: 17,
                lat_DD: 18,
                long_DD: 19,
                state: 20,
                county: 21,
                conf_attr: 22,
                conf_loc: 23,
                WENDI_name: 24,
                EIA_name: 25,
                FAA_jdate: 26,
                FAA_AGL: 27,
                FAA_ORS: 28,
                image_name: 29,
                image_year: 30,
                comments: 31
            };
            this.windArray = JSON.parse("[\n  [1546,9324,\"unknown Alameda Kenetech 56_100\",271,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"trestle\",\"yes\",0.1,27.1,-99999,-99999,8.5,17,226.98,37.762095,-121.658387,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"Kenetech turbines in process of being decommissioned and repowered\"],\n  [1547,9325,\"unknown Alameda Kenetech 56_100\",271,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"trestle\",\"yes\",0.1,27.1,-99999,-99999,8.5,17,226.98,37.762295,-121.658587,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"Kenetech turbines in process of being decommissioned and repowered\"],\n  [1548,9326,\"unknown Alameda Kenetech 56_100\",271,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"trestle\",\"yes\",0.1,27.1,-99999,-99999,8.5,17,226.98,37.762495,-121.658687,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"Kenetech turbines in process of being decommissioned and repowered\"],\n  [1549,9327,\"unknown Alameda Kenetech 56_100\",271,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"trestle\",\"yes\",0.1,27.1,-99999,-99999,8.5,17,226.98,37.762595,-121.658887,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"Kenetech turbines in process of being decommissioned and repowered\"],\n  [1550,9374,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.739295,-121.686587,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1551,9375,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.740795,-121.686987,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1552,9385,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.739395,-121.689287,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1553,9386,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.740395,-121.689887,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1554,9391,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.741395,-121.690387,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1555,9394,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.741995,-121.690887,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1556,9395,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.742095,-121.691087,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1557,9396,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.738595,-121.690887,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1558,9397,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.738795,-121.690987,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1559,9398,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.738095,-121.690687,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"],\n  [1560,9399,\"Altamont Power LLC\",54,\"1981_1995\",\"yes\",1981,\"Kenetech\",\"56_100\",\"small trestle\",\"yes\",0.1,5.4,26.67,18.2,8.5,17,226.98,37.738395,-121.690787,\"CA\",\"Alameda\",1,2,\"unknown\",\"unknown\",-99999,-99999,\"unknown\",\"NAIP\",\"2012\",\"large repowering of turbines in Altamont area, most if not all of these types of turbines are going to be replaced with newer turbines, tower height is variable depending on area\"]\n]");
        }
        Uswind.prototype.attached = function () {
            var that = this;
            window.require([
                "esri/views/MapView",
                "esri/Map",
                "esri/layers/FeatureLayer",
                "esri/layers/support/Field",
                "esri/geometry/Point",
                "esri/renderers/SimpleRenderer",
                "esri/symbols/SimpleMarkerSymbol",
                "esri/widgets/Legend",
                "esri/request",
                "dojo/_base/array",
                "dojo/dom",
                "dojo/on",
                "dojo/domReady!"
            ], function (MapView, Map, FeatureLayer, Field, Point, SimpleRenderer, SimpleMarkerSymbol, Legend, esriRequest, arrayUtils, dom, on) {
                var myGraphics = [];
                for (var ii = 0; ii < that.windArray.length; ii++) {
                    myGraphics.push({
                        "geometry": {
                            "x": that.windArray[ii][that.colDef.x],
                            "y": that.windArray[ii][that.colDef.y],
                            "spatialReference": {
                                "wkid": 4326
                            }
                        },
                        "symbol": null,
                        "attributes": {
                            "WIND_DIRECT": 240,
                            "WIND_SPEED": 15,
                            "ELEVATION": 253
                        },
                        "popupTemplate": null
                    });
                }
                var map = new Map({
                    basemap: "dark-gray"
                });
                // Create MapView
                var view = new MapView({
                    container: "simplewindDiv",
                    map: map,
                    center: [-144.492, 62.771],
                    zoom: 5,
                    // customize ui padding for legend placement
                    ui: {
                        padding: {
                            bottom: 15,
                            right: 0
                        }
                    }
                });
                /**************************************************
                * Define the renderer for symbolizing earthquakes
                **************************************************/
                var quakesRenderer = new SimpleRenderer({
                    symbol: new SimpleMarkerSymbol({
                        style: "circle",
                        size: 20,
                        color: [211, 255, 0, 0],
                        outline: {
                            width: 1,
                            color: "#FF0055",
                            style: "solid"
                        }
                    })
                });
                var legend = null;
                var fields = null;
                view.then(function () {
                    createLayer(myGraphics)
                        .otherwise(errback);
                    // Request the earthquake data from USGS when the view resolves
                    // getData()
                    //     .then(createGraphics) // then send it to the createGraphics() method
                    //     .then(createLayer) // when graphics are created, create the layer
                    //     .then(createLegend) // when layer is created, create the legend
                    //     .otherwise(errback);
                });
                // Request the earthquake data
                function getData() {
                    // data downloaded from the USGS at http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/ on 4/4/16
                    // month.geojson represents recorded earthquakes between 03/04/2016 and 04/04/2016
                    // week.geojson represents recorded earthquakes betwen 03/28/2016 and 04/04/2016
                    var url = "data/week.geojson";
                    return esriRequest(url, {
                        responseType: "json"
                    });
                }
                /**************************************************
                * Create graphics with returned geojson data
                **************************************************/
                function createGraphics(response) {
                    // raw GeoJSON data
                    var geoJson = response.data;
                    // Create an array of Graphics from each GeoJSON feature
                    return arrayUtils.map(geoJson.features, function (feature, i) {
                        return {
                            geometry: new Point({
                                x: feature.geometry.coordinates[0],
                                y: feature.geometry.coordinates[1]
                            }),
                            // select only the attributes you care about
                            attributes: {
                                ObjectID: i,
                                title: feature.properties.title,
                                type: feature.properties.type,
                                place: feature.properties.place,
                                depth: feature.geometry.coordinates[2] + " km",
                                time: feature.properties.time,
                                mag: feature.properties.mag,
                                mmi: feature.properties.mmi,
                                felt: feature.properties.felt,
                                sig: feature.properties.sig,
                                url: feature.properties.url
                            }
                        };
                    });
                }
                /**************************************************
                * Create a FeatureLayer with the array of graphics
                **************************************************/
                function createLayer(graphics) {
                    var lyr = new FeatureLayer({
                        source: graphics,
                        // create an instance of esri/layers/support/Field for each field object
                        fields: fields,
                        objectIdField: "ObjectID",
                        renderer: quakesRenderer,
                        spatialReference: {
                            wkid: 4326
                        },
                        geometryType: "point",
                        popupTemplate: null
                    });
                    map.add(lyr);
                    return lyr;
                }
                /******************************************************************
                * Add layer to layerInfos in the legend
                ******************************************************************/
                function createLegend(layer) {
                    // if the legend already exists, then update it with the new layer
                    if (legend) {
                        legend.layerInfos = [{
                                layer: layer,
                                title: "Magnitude"
                            }];
                    }
                    else {
                        legend = new Legend({
                            view: view,
                            layerInfos: [
                                {
                                    layer: layer,
                                    title: "Earthquake"
                                }]
                        }, "infoDiv");
                    }
                }
                // Executes if data retrevial was unsuccessful.
                function errback(error) {
                    console.error("Creating legend failed. ", error);
                }
            });
        };
        ;
        return Uswind;
    }());
    exports.Uswind = Uswind;
});
