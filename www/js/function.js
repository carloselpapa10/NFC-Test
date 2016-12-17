var app = angular.module("app", ['onsen'], ['ngCordova.plugins.nfc']);

app.controller("AppController", function($cordovaNfc, $cordovaNfcUtil){
  //Because of the problem about the async-ness of the nfc plugin, we need to wait
  //for it to be ready.
  
  $cordovaNfc.addNdefListener(
			function() {
				alert("a");
				document.write("Found an NDEF formatted tag");
			},
			function() {
				alert("b");
				console.log("Success.");
			},
			function() {
				alert("c");
				console.log("Fail.");
			}
  );
  
   $cordovaNfc.then(function(nfcInstance){

        //Use the plugins interface as you go, in a more "angular" way
      nfcInstance.addNdefListener(function(event){
            //Callback when ndef got triggered
      })
      .then(
        //Success callback
        function(event){
			alert("bound success "+event);
            console.log("bound success");
        },
        //Fail callback
        function(err){
		alert("error "+err);
            console.log("error");
        });
   });

   $cordovaNfcUtil.then(function(nfcUtil){
		alert("cordovaNfcUtil "+nfcUtil);
        console.log( nfcUtil.bytesToString("some bytes") )
   });    
});
