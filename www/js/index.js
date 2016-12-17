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
	
		/*function failure(reason){
			navigator.notification.alert(reason, function() {}, "There was a problem");
		}*/

        try {
	   nfc.addTagDiscoveredListener(
                function(event){alert("holaaa");},
                function (){},
                function(error){}
            );
            /*nfc.addNdefListener(
                app.onaddNdef,
                function () {},
		failure
           );     
           nfc.removeTagDiscoveredListener(
                app.onremoveTag,
                function (){},
                failure
            );            
            nfc.addMimeTypeListener(
                app.onaddMime,
                function(){},
		failure
            );*/
        } catch (ex) {
            alert(ex.message);
        }
        
        app.receivedEvent('deviceready');

    },
	
	/*onaddTagD: function(nfcEvent){
		alert("Holaaa");
	},	
	onaddNdef: function(nfcEvent){	
	},	
	onremoveTag: function(nfcEvent){
	},
	onaddMime: function(nfcEvent){
	},*/
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
