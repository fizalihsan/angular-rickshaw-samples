'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {

        $scope.options2 = {
            renderer: 'line'
        };
        $scope.features2 = {
            hover: {
                xFormatter: function(x) {
                    return 't=' + x;
                },
                yFormatter: function(y) {
                    return '$' + y;
                }
            },
            palette: 'colorwheel',
            legend: {
                toggle: true,
                highlight: true
            }
        };

        var dataSeries1 = [];
        var dataSeries2 = [];

        for (var i = 0; i < 50; i++) {
            dataSeries1.push({x : i, y : rnd()});
            dataSeries2.push({x : i, y : rnd()});
        }

        $scope.series2 = [{
                name: 'Before Changes',
                color: 'red',
                data: dataSeries1
            }, {
                name: 'After Changes',
                color: 'steelblue',
                data: dataSeries2
            }];
    }]);

function rnd(){
    return Math.floor((Math.random() * 100) + 1);
}