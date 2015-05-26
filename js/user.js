"use strict";


// initializing google map
function initialize() {
  var mapCanvas = document.getElementById("map-canvas");
  var mapOptions = {
    center: new google.maps.LatLng(44.5403, -78.5463),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
// google.maps.event.addDomListener(window, "load", initialize);


function noticeCtrl($scope) {
  $scope.notices = [
    {
      message: "A HP Laptop with Serial No. 34Y32U2BE has been recovered. Owner please claim it at Admin Block Office #32",
      timestamp: "2015-05-26T02:06:23Z",
      href: "#"
    }
    ,{
      message: "Student Identifications are required at Gate A",
      timestamp: "2015-05-24T02:06:23Z",
      href: "#"
    }
    ,{
      message: "Tomorrow we will be hosting the Minister for Education",
      timestamp: "2015-05-26T02:06:23Z",
      href: "#"
    }
  ];
}


function helpInfoCtrl($scope) {
  $scope.infos = [
    {
      label: "Applying for Attachment",
      href: "#"
    }
    ,{
      label: "Signing of Nominal Roll",
      href: "#"
    }
    ,{
      label: "Replacing Student ID",
      href: "#"
    }
  ];
}


angular.module("userApp", [ ])
  .controller("helpInfoCtrl", ["$scope", helpInfoCtrl])
  .controller("noticeCtrl", ["$scope", noticeCtrl]);
