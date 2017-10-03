var dogPen = angular.module('dogPen', []);
dogPen.controller('listController', ['$scope', '$http', function($scope, $http) {
    
    $scope.dogSearch = function() {
        // $scope.results=[];
        var url = "https://dog.ceo/api/breeds/image/random";
        $http.get(url)
            .then(function(response) {
                console.log(response);
                $scope.dogPic = response.data;
            });
    }
       $scope.myDogs = [{
        name: "Puggles",
        picture: "https://dog.ceo/api/img/bulldog-french/n02108915_12139.jpg"
    }];
    
    $scope.addToPen = function(dogName) {
        $scope.myDogs.push({
            name: dogName,
            picture: $scope.dogPic.message
        });
        $scope.dogName="";
        console.log("test")
    }
    
    
    $scope.dogSearch();
}]);