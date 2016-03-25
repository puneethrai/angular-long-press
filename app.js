angular
    .module('LongPress', ['pr.longpress'])
    .controller('MainController', ['$scope',
        function ($scope) {
            $scope.eventDisplay = "";
            $scope.onClick = function () {
                $scope.eventDisplay = "Click triggered";
            };
            $scope.onLongPress = function () {
                $scope.eventDisplay = "Long press";
            };
            $scope.onTouchEnd = function () {
                $scope.eventDisplay = "Touch end/ Mouse UP";
            };
        }
    ]);