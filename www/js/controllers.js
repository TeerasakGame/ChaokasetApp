angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$http,Chats,$state) {
  var urlna = "https://graph.facebook.com/v2.7/me?fields=id%2Cname%2Cemail%2Cpicture&access_token=EAARFNyVm1ZBgBAN7eLCihGzbSsJn6I1GZCjyrnbLOQL7yO8yxtHgACFJ4q2qug1R3GtACGnloRbOuQNpsZAbGU5c4mZBkZCZCH6EGTQZCtvbGl4WQOcz2ycqZB9RDGOuix6HCWK3gWeYs7VEQKMy6V3JneLhGZBZCxrJYZD";
	//var urlna = "http://angsila.cs.buu.ac.th/~55160287/facebook.php?token=EAARFNyVm1ZBgBAN7eLCihGzbSsJn6I1GZCjyrnbLOQL7yO8yxtHgACFJ4q2qug1R3GtACGnloRbOuQNpsZAbGU5c4mZBkZCZCH6EGTQZCtvbGl4WQOcz2ycqZB9RDGOuix6HCWK3gWeYs7VEQKMy6V3JneLhGZBZCxrJYZD"
  //alert(url);
/*  $http.get(url).then(function(response) {
      alert("API OK : "+JSON.stringify(response));
      $scope.aaa =  JSON.stringify(response);
    //alert(response.data);
  },function(error) {
    alert("error API : "+JSON.stringify(error));
    $scope.aaa = "error";
  });*/
  $http.get(urlna).then(function(response) {
      //  alert("API OK : "+JSON.stringify(response));
        $scope.aaa =  JSON.stringify(response);
      //alert(response.data);
    },function(error) {
    //  alert("error API : "+JSON.stringify(error));
      $scope.aaa = "error";
    });
 /* $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  console.log(ip);
 // console.log(Chats.test());
  $scope.chats = Chats.all();*/
  //$scope.api =  Chats.test();
  $http.get(ip).then(function(resp){
     // console.log('Success : ', resp.data.records); // JSON object
    $scope.api = resp.data.records;
  }, function(err){
      console.error('ERR', err);
  })
  $scope.doRefresh = function() {
    $http.get("http://angsila.cs.buu.ac.th/~55160287/ionic_res.php").then(function(resp){
      //alert("call ok");
        //  console.log('Success : '+resp.data); // JSON object
      $scope.api = resp.data;
          //return data;
    }, function(err){
        console.error('ERR', err);
    })
    .finally(function() {
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.goCropDetail = function() {
      $state.go('app.playlists');
  };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('BrowseCtrl', function($scope) {
  $scope.timeline = [{
    date: new Date(),
    title: "I am here",
    author: "Ludo Anderson",
    profilePicture: "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg",
    text: "Lorem ipsum dolor sit amet",
    type: "location"

  }, {
    date: new Date(),
    title: "For my friends",
    author: "Sara Orwell",
    profilePicture: "https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    type: "text"

  }, {
    date: new Date(),
    title: "Look at my video!",
    author: "Miranda Smith",
    profilePicture: "https://static.licdn.com/scds/common/u/images/apps/plato/home/photo_profile_headshot_200x200_v2.jpg",
    text: "Lorem ipsum dolor sit amet",
    type: "video"

  }, {
    date: new Date(),
    title: "Awesome picture",
    author: "John Mybeweeg",
    profilePicture: "http://www.lawyersweekly.com.au/images/LW_Media_Library/LW-602-p24-partner-profile.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    type: "picture"
  }]
})

.controller('CropCtrl',function($scope,$http){

  $http.get(ip).then(function(resp){
    $scope.api = resp.data.records;
  }, function(err){
      console.error('ERR', err);
  })
  //update data
  $scope.doRefresh = function() {
    $http.get("http://angsila.cs.buu.ac.th/~55160287/ionic_res.php").then(function(resp){
      //alert("call ok");
      $scope.api = resp.data;
          //return data;
    }, function(err){
        console.error('ERR', err);
    })
    .finally(function() {
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
})

.controller('CropDetailCtrl',function($scope,$cordovaCamera){
  $scope.goCamera = function() {
    var options = {
              destinationType: Camera.DestinationType.FILE_URI,
              sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
              correctOrientation: true,
              quality: 100,
              allowEdit: true,
            }
            $cordovaCamera.getPicture(options).then(function(imageData){
              $scope.image = imageData;
              //$scope.imgURI = "data:image/jped;base64," + results;
            },function(err){

            });
  };

})

.controller('CameraCtrl',function($scope,$cordovaCamera){
//  alert("555");
  var options = {
    quality: 100,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
    allowEdit: true,
    encodingType: Camera.EncodingType.JPEG,
  //  targetWidth: 300,
    //targetHeight: 400,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: true,
    correctOrientation:true
  };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      $scope.image = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
})

.controller('LoginCtrl', function($scope){
  //alert("555");
  $scope.loginData = {};
  $scope.user = {
    username: '',
    password : ''
  };
  //alert(angular.isObject($scope.loginData));
  $scope.doLogin = function(form) {
    /*console.log($scope.loginData);
    if($scope.loginData.username == "" || $scope.loginData.password == "" || $scope.loginData.username == null || $scope.loginData.password == null){
      alert("กรุณากรอกข้อมูลให้ครบ");
      console.log(JSON.stringify($scope.loginData));
    }else{
      alert("กรอกครบ");
      console.log(JSON.stringify($scope.loginData));
    }*/
    //console.log(form);
   if(form.$valid) {
   console.log('Sign-In', $scope.user.username);
   }
  };
});
