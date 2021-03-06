'use strict';

/**
 * @ngdoc service
 * @name testApp.Instagram
 * @description
 * # Instagram
 * Service in the testApp.
 */
angular.module('testApp')
  .service('Instagram', function Instagram($http, $q, InstagramAccessToken, EnvVars) {

    var me = this;
  	var accessToken;

    // getthe env vars
    var envVars = EnvVars.getVars();

    // Instagram Parama
  	var clientId = envVars.instagramClientId;
  	var responseType = 'token';
    var redirectUri = envVars.instagramRedirectUri;
  	var accessTokenUrl = 'https://instagram.com/oauth/authorize/';

    // endpoints
    var url = 'https://api.instagram.com/v1';
    var userEndpoint = url+'/users/';
    var popularMediaEndpoint = url+'/media/popular/';
    var usersFeedEndpoint = url+'/users/self/feed/';

    this.getUser = function (){

      var deferred = $q.defer();

      var token = me.getAccessToken();

      if (token === null) {

        deferred.reject(null);
      }

      $http.jsonp(userEndpoint+'self?access_token='+token+'&callback=JSON_CALLBACK').

        success(function(data) {

          deferred.resolve(data.data);
        }).

        error(function() {

          deferred.reject(null);
        });

        return deferred.promise;
    };

    this.getPopularMedia = function (){

      var deferred = $q.defer();

      var token = me.getAccessToken();

      if (token === null) {

        deferred.reject(null);
      }

      $http.jsonp(popularMediaEndpoint+'?access_token='+token+'&callback=JSON_CALLBACK').

        success(function(data) {

          deferred.resolve(data.data);
        }).

        error(function() {

          deferred.reject(null);
        });

        return deferred.promise;
    };

  	this.getUsersFeed = function (){

      var deferred = $q.defer();

      var token = me.getAccessToken();

      if (token === null) {

        deferred.reject(null);
      }

      $http.jsonp(usersFeedEndpoint+'?access_token='+token+'&callback=JSON_CALLBACK').

        success(function(data) {

          deferred.resolve(data.data);
        }).

        error(function() {

          deferred.reject(null);
        });

        return deferred.promise;
  	};

    this.setAccessToken = function (token){

      accessToken = token;

      // save to local storage
      InstagramAccessToken.set(token);
    };

  	this.getAccessToken = function (){

      if (typeof accessToken === 'undefined') {

        // check if we have the access token stored in local storage
        var accessTokenLocalStorage = InstagramAccessToken.get();

        if (accessTokenLocalStorage !== null) {

         return accessTokenLocalStorage;
        }
        else{

          return null;
        }
      }
      else {

        return accessToken;
      }
  	};

  	this.getAccessTokenUrl = function (){

  		var url = accessTokenUrl+'?client_id='+clientId+'&redirect_uri='+encodeURIComponent(redirectUri)+'&response_type='+responseType;
  		return url;
  	};  	
  });