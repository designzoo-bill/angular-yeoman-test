"use strict";angular.module("testApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/terms",{templateUrl:"views/terms.html",controller:"TermsCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/sign-up",{templateUrl:"views/sign-up.html",controller:"SignUpCtrl"}).otherwise({redirectTo:"/home"})}]),angular.module("testApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("testApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("testApp").controller("TermsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("testApp").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("testApp").controller("NavigationCtrl",["$scope","$location",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.getClass=function(a){return b.path().substr(0,a.length)===a?"active":""}}]),angular.module("testApp").controller("SignUpCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);