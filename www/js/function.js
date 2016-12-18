var app = angular.module("app", ['onsen','ngCordova.plugins.nfc']);

app.controller("AppController", function($scope,$http,$cordovaNfc, $cordovaNfcUtil){
	
	$cordovaNfc.then(function(nfcInstance){
      nfcInstance.addNdefListener(function(nfcEvent){
			alert("123");
      })
      .then(
        function(event){
            console.log("bound success");
        },
        function(err){
            console.log("error");
        });
		
		nfcInstance.addTagDiscoveredListener(function(nfcEvent){
			alert(nfcEvent.tag.id);
		})
		.then(
        function(event){
            console.log("bound success");
        },
        function(err){
			alert("error 2");
            console.log("error");
        });
   });

   $cordovaNfcUtil.then(function(nfcUtil){
        console.log( nfcUtil.bytesToString("some bytes") )
   }); 
	   
});
