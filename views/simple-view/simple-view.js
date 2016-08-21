define(["require", "exports"], function (require, exports) {
    "use strict";
    var SimpleView = (function () {
        function SimpleView() {
            this.message = 'This message brought to you by the SimpleView view model.';
        }
        return SimpleView;
    }());
    exports.SimpleView = SimpleView;
});
