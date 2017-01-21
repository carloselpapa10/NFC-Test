var app = angular.module("app", ['onsen','ngCordova.plugins.nfc']);

app.controller("AppController", function($scope,$http,$cordovaNfc, $cordovaNfcUtil){

	$scope.user = {photo:"img/logo.png"};	
	//$scope.image = "img/logo.png";
	
	$scope.viewTimetable = function(myNavigator,user){	
		myNavigator.pushPage('timetable.html', { });		
	}
	
	$scope.onSearchUser = function(idCard){
	
		/*go to search student information*/
			url = "https://139.165.56.219:8080/api/v1/student?idCard="+idCard;
			$http.get(url)
            .success(
            function(response){
                $scope.user = response;  
				document.getElementById("btnId").style.visibility = "visible";
            })
            .error(
            function(error){
				document.getElementById("btnId").style.visibility = "hidden";					
            });		
	}
	
	$cordovaNfc.then(function(nfcInstance){
      nfcInstance.addNdefListener(function(nfcEvent){
			alert("123");
      })
      .then(
        function(event){
            console.log("bound success");
        },
        function(err){
			alert("error addNdefListener");
            console.log("error");
        });
		
		nfcInstance.addTagDiscoveredListener(function(nfcEvent){
			navigator.notification.vibrate(300); 
			$scope.onSearchUser(nfcEvent.tag.id);
		})
		.then(
        function(event){
            console.log("bound success");
        },
        function(err){
			alert("error addTagDiscoveredListener");
            console.log("error");
        });
   });

   $cordovaNfcUtil.then(function(nfcUtil){		
        console.log( nfcUtil.bytesToString("some bytes") )
   });
});
