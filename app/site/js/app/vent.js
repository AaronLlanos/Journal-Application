define([
    'marionette'
],
/**
 * Application Event Aggregator
 * @name    Vent
 * @class   Vent
 * @constructor
 * @return {Marionette.EventAggregator} Marionette.EventAggregator
 */
function(marionette){
    'use strict';
    return new marionette.EventAggregator();
});