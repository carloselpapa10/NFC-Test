var user = null;

app = {
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
		document.getElementById("userData").textContent="";
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
			alert(cordovaHTTP);
			/*cordovaHTTP.get("https://google.com/", {
				id: 12,
				message: "test"
			}, { Authorization: "OAuth2: token" }, function(response) {
				alert(response.status);
			}, function(response) {
				alert(response.error);
			});*/

			user = [{ID: '4,-13,109,-6,-39,63,-128',
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
		
			if(ID == user[0].ID){
				document.getElementById("userData").textContent=user[0].NAME+" ("+user[0].TYPE+")";
			}else if(ID == user[1].ID){
				document.getElementById("userData").textContent=user[1].NAME+" ("+user[1].TYPE+")";
			}else{
				document.getElementById("userData").textContent="Unknown User";
			}	
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

