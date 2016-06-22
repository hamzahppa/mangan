angular.module('app.controllers', [])
  
.controller('jelajahCtrl', function($scope) {

})
   
.controller('tersimpanCtrl', function($scope) {

})
   
.controller('populerCtrl', function($scope) {

})
         
.controller('selatViensCtrl', function($scope, $ionicModal, $ionicPopup) {
	// rating
	$scope.ratingsObject = {
		iconOn: 'ion-ios-star',
		iconOff: 'ion-ios-star-outline',
		iconOnColor: 'orangered',
		iconOffColor: 'grey',
		rating: 5,
		minRating: 1,
		callback: function(rating) {
			$scope.ratingsCallback(rating);
		}
	};

	$scope.ratingsCallback = function(rating) {
		console.log('Select', rating);
	};

	// load modal
	$ionicModal.fromTemplateUrl('templates/ulasanResto.html', {
		scope: $scope,
		animation: 'slide-in-up' 
	}).then(function(modal) { $scope.modalReview = modal; });

	$ionicModal.fromTemplateUrl('templates/ulasanMenu.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) { $scope.modalMenu = modal; });

	$ionicModal.fromTemplateUrl('templates/rating.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) { $scope.modalRating = modal; });

	$scope.openReview = function() {
		$scope.modalReview.show();
	};

	$scope.closeReview = function() {
		$scope.modalReview.hide();
	};

	$scope.openMenu = function() {
		$scope.modalMenu.show();
	};

	$scope.closeMenu = function() {
		$scope.modalMenu.hide();
	};

	$scope.openRating = function() {
		$scope.modalRating.show();
	}

	$scope.openReviewPopup = function() {
		$scope.data = {}
		
		var reviewPopup = $ionicPopup.show({
			templateUrl: 'templates/ulasanResto.html',
			scope: $scope,
			buttons: [
				{ text: 'Selesai' },
			]
		});

		reviewPopup.then(function(res) {
			console.log('Tapped!', res);
		});
	}

})
   
.controller('transaksiCtrl', function($scope) {

})
   
.controller('pengaturanCtrl', function($scope) {

})
   
.controller('profilCtrl', function($scope) {

})
   
.controller('menuSelatViensCtrl', function($scope) {

})
   
.controller('invoiceCtrl', function($scope) {

})
   
.controller('kategoriCtrl', function($scope) {

})

.controller('petaCtrl', function($scope, $state, $cordovaGeolocation, $ionicPopup) {
	var options = {timeout: 10000, enableHighAccuracy: true};

	var latLng = new google.maps.LatLng(-7.5664551, 110.8061434);  

	var mapOptions = {
		center: latLng,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	$scope.map = new google.maps.Map(document.getElementById("mangan-peta"), mapOptions);
	//Wait until the map is loaded
	google.maps.event.addListenerOnce($scope.map, 'idle', function(){
		var marker = new google.maps.Marker({
			map: $scope.map,
			animation: google.maps.Animation.DROP,
			position: latLng,
			icon: 'img/marker.png'
		});

		var infoWindow = new google.maps.InfoWindow({
			content: "Nama Resto"
		});

		google.maps.event.addListener(marker, 'click', function () {
			infoWindow.open($scope.map, marker);
		});

		infoWindow.open($scope.map, marker);
	});

	$scope.openUrl = function() {
		$cordovaGeolocation.getCurrentPosition(options).then(function(position){
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			window.open('http://maps.google.com/maps?saddr=+'+lat+'+,+'+lng+'+&daddr=+-7.5664551+,+110.8061434+&dirflg=d', '_system', 'location=yes');
			// window.open('geo:'+lat+','+lng+'?q=-7.5664551,110.8061434(Ralana Eatery)', '_system', 'location=yes');
			return false;
		}, function(error){
			// console.log("Could not get location");
			$ionicPopup.alert({
				title: 'Error',
				template: 'Could not get location',
				okText: 'OK',
				okType: 'button-balanced'
			});
		});
	}
})
 