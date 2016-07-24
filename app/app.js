var myApp=angular.module("myapplication",["ngRoute"])

myApp.config(["$routeProvider",function($routeProvider){

$routeProvider.when("/home",{
  templateUrl:"views/home.html"
})
.when("/directory",{
  templateUrl:"views/directory.html",
  controller:"MyController"
}).otherwise({
  redirectTo:"/home"
});

}]);

myApp.run(function(){

});

myApp.controller("MyController", ['$scope','$http',function($scope,$http)
{


            //handle remove ninja function
            $scope.removeNinja=function(ninja)
                    {
                       var index=$scope.ninjas.indexOf(ninja);
                       $scope.ninjas.splice(index,1);
                    }

            //handle add ninja function
            $scope.addNinja=function()
                            {
                              $scope.ninjas.push(
                                {
                                  name:$scope.newninja.name,
                                  belt:$scope.newninja.belt,
                                  rate:parseInt($scope.newninja.rate),
                                  available:true
                              })

                              $scope.newninja=null;
                            }

          //handle retrive of ninjas

          $http.get("data/ninjas.json").success(function(data)
          {
            $scope.ninjas=data;
          });

}])
