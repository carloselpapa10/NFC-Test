var app = angular.module("app", ['onsen','ngCordova.plugins.nfc']);

app.controller("AppController", function($scope,$http,$cordovaNfc, $cordovaNfcUtil){
	
	$scope.failure = function(reason){
		navigator.notification.alert(reason, function() {}, "There was a problem");
	}
	
	$scope.addTagD = function(nfcEvent){
		alert(nfcEvent.tag.id);
	}
	
	$cordovaNfc.then(function(nfcInstance){
      nfcInstance.addNdefListener(function(nfcEvent){
			alert("123");
      })
      .then(
        function(event){
            console.log("bound success");
        },
        $scope.failure);
		
		nfcInstance.addTagDiscoveredListener(
		$scope.addTagD
		.then(
        function(event){
		alert("good");
            console.log("bound success");
        },
        $scope.failure);
   });

   $cordovaNfcUtil.then(function(nfcUtil){
        console.log( nfcUtil.bytesToString("some bytes") )
   }); 
	   
});
