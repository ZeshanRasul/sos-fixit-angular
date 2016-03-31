sosFixit.controller("listController", ['$rootScope','uiGmapGoogleMapApi', 'uiGmapIsReady', 'skillsResourceFactory',
'skillsListService', 'userDistanceCalcFactory', 'savingUserIdService',
 function($rootScope, uiGmapGoogleMapApi, uiGmapIsReady, skillsResourceFactory, skillsListService, userDistanceCalcFactory,
    savingUserIdService){

  var self = this;

  self.users = [];
  self.loaded = false;

  (self.getUsersSkills = function() {

    uiGmapGoogleMapApi.then(function(maps) {


    skillsResourceFactory.getUserList(skillsListService.getData())
      .then(function(response) {
        var currentUserID = $rootScope.user.id;
        var currentUserLocation = new google.maps.LatLng($rootScope.user.latitude,$rootScope.user.longitude);
        var userSkillLength = response.data.skill.users.length;
        var allSkillUsers = response.data.skill.users;
        for (var i = 0; i < userSkillLength; i++){

          userLat = allSkillUsers[i].user.latitude;
          userLng = allSkillUsers[i].user.longitude;
          userLocation = new google.maps.LatLng(userLat, userLng);
          userDistanceCalcFactory.userDistance(currentUserLocation, userLocation);
          if (allSkillUsers[i].user.id != currentUserID) {
          self.users.push({
            "email": allSkillUsers[i].user.email,
            "name": allSkillUsers[i].user.name,
            "location": allSkillUsers[i].user.location,
            "distance": distToMiles
            });
          }
        }

        self.loaded = true;

    });
  });

  });

  self.saveUserId = function(userId) {
    savingUserIdService.setData(userId);
  };
}]);
