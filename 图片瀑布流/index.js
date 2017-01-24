angular.module('App',[])
    .controller('ImageLayout',ImageLayout)

function ImageLayout($scope,$http){
    $http.get('cats.json').success(function(imgs){
        $scope.imgs = imgs
    })
}
