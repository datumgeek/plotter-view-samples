define(["require", "exports"], function (require, exports) {
    "use strict";
    var GlobeView = (function () {
        function GlobeView() {
        }
        GlobeView.prototype.activate = function () {
            window.require([
                "esri/Map",
                "esri/views/SceneView",
                "dojo/domReady!"
            ], function (Map, SceneView) {
                var map = new Map({
                    basemap: "streets",
                    ground: "world-elevation"
                });
                var view = new SceneView({
                    container: "globeDiv",
                    map: map,
                    scale: 50000000,
                    center: [-101.17, 21.78]
                });
            });
        };
        return GlobeView;
    }());
    exports.GlobeView = GlobeView;
});
