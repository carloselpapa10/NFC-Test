var user = null;

var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
		function failure(reason){
			navigator.notification.alert(reason, function() {}, "There was a problem");
		}
				
        try {
	   nfc.addTagDiscoveredListener(
                app.onaddTagD,
                function (){},
                failure
            );
            nfc.addNdefListener(
                app.onaddNdef,
                function () {},
		failure
           ); 
        } catch (ex) {
            alert("error try catch"+ex.message);
        }
        
        app.receivedEvent('deviceready');
    },	
	onaddTagD: function(nfcEvent){
		var tag = nfcEvent.tag;
		
		if (tag.id) {
			app.onSearchUser(tag.id);
		}
		navigator.notification.vibrate(100); 
	},	
	onaddNdef: function(nfcEvent){	
		alert("onaddNdef");
	},
	onSearchUser: function(ID){

			user = [{ID: '4,-13,109,-6,-39,63,-128',
				NAME: 'Carlos',
				LASTNAME: 'Avendano',
				PHOTO: 'path',
				PHONE: '3003940576',
				EMAIL: 'c.avendano10@gmail.com'},
				{ID: '4,-98,-73,-118,-38,63,-128',
				NAME: 'Kelwin',
				LASTNAME: 'Payares',
				PHOTO: 'path',
				PHONE: '3288046004',
				EMAIL: 'stevin_2209@hotmail.com'}];
		
			if(ID == user[0].ID){
				alert("User: "+user[0].NAME);
			}
			
			if(ID == user[1].ID){
				alert("User: "+user[1].NAME);
			}
			
		/*window.cordovaHTTP.get(
		  "https://platform.telerik.com",
		  function(msg) {alert("OK: " + msg)},
		  function(msg) {alert("ERROR: " + msg)}
		);*/
		
	},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
