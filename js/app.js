var app =angular.module("myApp",["ngRoute"]);//module is a collection of services,directives,controllers,filtersand configuration information
                                             //ng route helps to make your application SPA


app.config(function($routeProvider){    //to navigate to different pages in your application
    $routeProvider.when("/",{          // also for SPA
                                      //route povider is a route module  used to configure different routes in your application
                                          //ng model->binds the value of html controls like input select text area to application data
      templateUrl:"home.html"
    }).when("/home",{
        templateUrl:"home.html"
    }).when("/addemployee",{
        templateUrl:"addemployee.html"
    }).when("/tableview",{
        templateUrl:"tableview.html",
        controller:"tableController"

    }).when("/treeview",{
        templateUrl:"treeview.html"
    }).when("/listsview",{
        templateUrl:"listsview.html",
            controller:"tableController"
    }).when("/view",{
        templateUrl:"view.html",
        controller:"viewController"

    });
});

app.controller("addemployeecontroller",function($scope,$http,$location){

console.log("Submit Clicked");
$scope.submit=function(){

  let data={

"fullname":$scope.fullname,
"designation":$scope.designation,
"manager":$scope.value
  }
  console.log(data);

/*add name,designation and value according to manager*/

if($scope.value=="Anchal"){
$location.path('/'+$scope.value);
$http.post("http://localhost:3000/addsemp",data).then(function(response){
  console.log(response.data);
  });
  }
///////////////////////////////////////////////
if($scope.value=="Anika"){
$location.path('/'+$scope.value);
$http.post("http://localhost:3000/addsemp",data).then(function(response){
console.log(response.data);
});
}
////////////////////////////////////////////////
if($scope.value=="Ashlesha"){
$location.path('/'+$scope.value);
$http.post("http://localhost:3000/addsemp",data).then(function(response){
console.log(response.data);
});
}
/////////////////////////////////////////////////
if($scope.value=="Birju"){
$location.path('/'+$scope.value);
$http.post("http://localhost:3000/addsemp",data).then(function(response){
console.log(response.data);
});
}
////////////////////////////////////
if($scope.value=="Devak"){
$location.path('/'+$scope.value);
$http.post("http://localhost:3000/addsemp",data).then(function(response){
console.log(response.data);
});
}
//$location.path('/view/'+response.data.fullname);
$location.path('/tableview');
}
});

/*Table View Controller*/

app.controller("tableController",function($scope,$http,$location){
 $http.get("http://localhost:3000/tableview").then(function(response){
     $scope.datam=response.data;
     console.log("inside data fetcher");
     console.log($scope.datam);
 });
  });

  /*View of single data Controller*/

  app.controller("viewController",function($scope,$http,$location,$routeParams){
    console.log($routeParams.fullname);
 $http.get("http://localhost:3000/view?fullname="+$routeParams.fullname).then(function(response){
  $scope.data=response.data;
  console.log("inside data fechter");
  console.log($scope.data);
});
});
