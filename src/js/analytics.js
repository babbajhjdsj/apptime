require=function e(t,n,i){function o(a,l){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!l&&u)return u(a,!0);if(r)return r(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return o(n||e)},s,s.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({analytics:[function(e,t,n){"use strict";var i=e("jskit/general/Cookie"),o={_getAnalyticsCookie:function(){return i.getJSONCookie("_uptime_analytics")||{}},_setAnalyticsCookie:function(e){return i.setJSONCookie("_uptime_analytics",e,90)},fullstoryTrackingIsEnabled:function(){return o._getAnalyticsCookie().enable_fullstory_tracking||!1},toggleFullstoryTracking:function(e){var t=o._getAnalyticsCookie();t.enable_fullstory_tracking=e,o._setAnalyticsCookie(t)},sendGoogleAnalyticsEvent:function(e,t,n){if(window.ga){if(!e||!t)throw"sendGoogleAnalyticsEvent(): Required category or action not provided.";window.ga("send","event",{eventCategory:e,eventAction:t,eventLabel:n||null,transport:"beacon"})}},initialize:function(){}};o.initialize(),t.exports=o},{"jskit/general/Cookie":void 0}]},{},[]);