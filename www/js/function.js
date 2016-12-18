var app = angular.module("app", ['onsen','ngCordova.plugins.nfc']);

app.controller("AppController", function($scope,$http,$cordovaNfc, $cordovaNfcUtil){
	
	$cordovaNfc.then(function(nfcInstance){

        //Use the plugins interface as you go, in a more "angular" way
      nfcInstance.addNdefListener(function(event){
            //Callback when ndef got triggered
			alert("123");
      })
      .then(
        //Success callback
        function(event){
			alert("bound success");
            console.log("bound success");
        },
        //Fail callback
        function(err){
			alert("error 1");
            console.log("error");
        });
		
		nfcInstance.addTagDiscoveredListener(function(event){
			alert("345");
		})
		.then(
        //Success callback
        function(event){
			alert("bound success 2");
            console.log("bound success");
        },
        //Fail callback
        function(err){
			alert("error 2");
            console.log("error");
        });
   });

   $cordovaNfcUtil.then(function(nfcUtil){
		alert("nfcUtil");
        console.log( nfcUtil.bytesToString("some bytes") )
   }); 
	   
});
