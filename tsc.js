var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("Models/TrackableModel", [], function (exports_1, context_1) {
    "use strict";
    var TrackableModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TrackableModel = (function () {
                function TrackableModel() {
                }
                return TrackableModel;
            }());
            exports_1("TrackableModel", TrackableModel);
        }
    };
});
System.register("Models/ItemModel", ["Models/TrackableModel"], function (exports_2, context_2) {
    "use strict";
    var TrackableModel_1, ItemModel;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (TrackableModel_1_1) {
                TrackableModel_1 = TrackableModel_1_1;
            }
        ],
        execute: function () {
            ItemModel = (function (_super) {
                __extends(ItemModel, _super);
                function ItemModel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return ItemModel;
            }(TrackableModel_1.TrackableModel));
            exports_2("ItemModel", ItemModel);
        }
    };
});
System.register("mian", ["Models/ItemModel"], function (exports_3, context_3) {
    "use strict";
    var baseUrl, ItemModel_1;
    var __moduleName = context_3 && context_3.id;
    function fetchItems() {
        var listOFItems = new Array();
        fetch(baseUrl)
            .then(function (resp) { return resp.json(); })
            .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var item = new ItemModel_1.ItemModel();
                item.ItemImg = data[i]['id'];
                item.ItemName = data[i]['itemName'];
                item.ItemImg = data[i]['itemImg'];
                item.ItemDescreption = data[i]['itemDescription'];
                item.ItemPrice = data[i]['itemPrice'];
                listOFItems.push(item);
            }
        });
        return listOFItems;
    }
    function alterDom() {
        var listOfItems = fetchItems();
        console.log(listOfItems);
    }
    return {
        setters: [
            function (ItemModel_1_1) {
                ItemModel_1 = ItemModel_1_1;
            }
        ],
        execute: function () {
            baseUrl = 'https://localhost:5001/api/items';
        }
    };
});
//# sourceMappingURL=tsc.js.map