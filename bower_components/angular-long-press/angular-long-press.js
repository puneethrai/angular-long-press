(function () {
    'use strict';
    angular
        .module('pr.longpress', [])
        .directive('onLongPress', function ($parse, $timeout) {
            return {
                restrict: 'A',
                link: function ($scope, $elm, $attrs) {
                    var timer;
                    $elm.bind('touchstart, mousedown', onEnter);

                    $elm.bind('touchend, mouseup', onExit);
                    $elm.bind('click', onClick);

                    function onEnter(evt) {
                        var functionHandler = $parse($attrs.onLongPress);
                        $timeout.cancel(timer);
                        //To handle click event properly
                        $scope.longPressSent = false;
                        // We'll set a timeout for 600 ms for a long press
                        timer = $timeout(function () {
                            $scope.longPressSent = true;
                            // If the touchend event hasn't fired,
                            // apply the function given in on the element's on-long-press attribute
                            $scope.$apply(function () {
                                functionHandler($scope, {
                                    $event: evt
                                });
                            });
                        }, 600);

                    }

                    function onExit(evt) {
                        var functionHandler = $parse($attrs.onTouchEnd);
                        // Prevent the onLongPress event from firing
                        $timeout.cancel(timer);
                        // If there is an on-touch-end function attached to this element, apply it
                        if ($attrs.onTouchEnd) {
                            $scope.$apply(function () {
                                functionHandler($scope, {
                                    $event: evt
                                });
                            });
                        }

                    }

                    function onClick(evt) {
                        //If long press is handled then prevent click
                        if ($scope.longPressSent && (!$attrs.preventClick || $attrs.preventClick === "true")) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            evt.stopImmediatePropagation();
                        }

                    }
                }
            };
        });
})();
