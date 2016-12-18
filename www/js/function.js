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
	
	$scope.image = "img/logo.png";
	$scope.userData = "";
	
	$scope.onSearchUser = function(ID){
	
		/*go to search student information
			$http.get($scope.url.defecto+"kcrs_servidor/listarProductos.php?id=")
            .success(
            function(response){
                alert(response);              
            })
            .error(
            function(){
                alert("No");
            });			
		*/
		$scope.user = [{ID: '4,-13,109,-6,-39,63,-128',
				NAME: 'Carlos',
				LASTNAME: 'Avendano',
				PHOTO: 'img/Carlos.jpg',
				TYPE: 'Student',
				PHONE: '3003940576',
				EMAIL: 'c.avendano10@gmail.com'},
				{ID: '4,-98,-73,-118,-38,63,-128',
				NAME: 'Kelwin',
				LASTNAME: 'Payares',
				PHOTO: 'img/Kelwin.jpg',
				TYPE: 'Professor',
				PHONE: '3288046004',
				EMAIL: 'stevin_2209@hotmail.com'}];
				
		if(ID == $scope.user[0].ID){
			$scope.image = $scope.user[0].PHOTO;
			$scope.userData = $scope.user[0].NAME+" ("+$scope.user[0].TYPE+")";
		}else if(ID == $scope.user[1].ID){
			$scope.image = $scope.user[1].PHOTO;
			$scope.userData = $scope.user[1].NAME+" ("+$scope.user[1].TYPE+")";
		}else{
			$scope.image = "img/logo.png";
			$scope.userData ="Unknown User";
		}
		myNavigator.resetToPage('index.html', { });
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
