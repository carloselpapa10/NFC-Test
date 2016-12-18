var app = angular.module("app", ['onsen','ngCordova.plugins.nfc']);

app.controller("AppController", function($scope,$http,$cordovaNfc, $cordovaNfcUtil){

	$scope.user = {
        ID: '',
        NAME: '',
		LASTNAME: '',
        PHOTO: '',
        TYPE: '',
        PHONE: '',
        EMAIL: ''
    };
	
	$scope.onSearchUser = function(ID){
	
		/*go to search student information*/
		$scope.user = [{ID: '4,-13,109,-6,-39,63,-128',
				NAME: 'Carlos',
				LASTNAME: 'Avendano',
				PHOTO: 'path',
				TYPE: 'Student',
				PHONE: '3003940576',
				EMAIL: 'c.avendano10@gmail.com'},
				{ID: '4,-98,-73,-118,-38,63,-128',
				NAME: 'Kelwin',
				LASTNAME: 'Payares',
				PHOTO: 'path',
				TYPE: 'Professor',
				PHONE: '3288046004',
				EMAIL: 'stevin_2209@hotmail.com'}];
				
		if(ID == $scope.user[0].ID){
			alert($scope.user[0].NAME);
			document.getElementById("userData").textContent=$scope.user[0].NAME+" ("+$scope.user[0].TYPE+")";
		}else if(ID == $scope.user[1].ID){
			alert($scope.user[0].NAME);
			document.getElementById("userData").textContent=$scope.user[1].NAME+" ("+$scope.user[1].TYPE+")";
		}else{
			document.getElementById("userData").textContent="Unknown User";
		}
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
			navigator.notification.vibrate(200); 
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
