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
			document.getElementById("userData").textContent=$scope.user[0].NAME+" ("+$scope.user[0].TYPE+")";
		}else if(ID == $scope.user[1].ID){
			document.getElementById("userData").textContent=$scope.user[1].NAME+" ("+$scope.user[1].TYPE+")";
		}else{
			document.getElementById("userData").textContent="Unknown User";
		}
	}
	
	$scope.receivedEvent = function(id){
		var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

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
		$scope.receivedEvent("deviceready");
        console.log( nfcUtil.bytesToString("some bytes") )
   }); 
});
