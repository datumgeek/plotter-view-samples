define(["require", "exports"], function (require, exports) {
    "use strict";
    var WindFarmTopTen = (function () {
        function WindFarmTopTen() {
            this.farms = [
                { Name: 'Green Ridge Power (1476)' },
                { Name: 'Lake Erie Alternative (1400)' },
                { Name: 'Wind Power Partners (967)' },
                { Name: 'Solano County (600)' },
                { Name: 'Zond-PanAero Windsystems (460)' },
                { Name: 'Radial Wind Farm (390)' },
                { Name: 'Apex Offshore Phase 2 (360)' },
                { Name: 'Sky River Wind Farm (342)' },
                { Name: 'Patterson Pass Wind Farm (336)' },
                { Name: 'Hartland Wind Farm (333)' }
            ];
        }
        WindFarmTopTen.prototype.launchWindFarmDetails = function (farm) {
            alert("Launch Details (" + farm.Name + ")");
        };
        return WindFarmTopTen;
    }());
    exports.WindFarmTopTen = WindFarmTopTen;
});
