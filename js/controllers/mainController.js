(function() {
    'use strict';
    
    angular
    .module('cricketScorecard')
    .controller('mainController', function(API) {
        var vm = this;

        
        //clears form and sets the scores for all points to 0 on page load
        vm.form = [];

        vm.scores = {};
        vm.scores.p1_20 = 0;
        vm.scores.p2_20 = 0;
        vm.scores.p1_19 = 0;
        vm.scores.p2_19 = 0;
        vm.scores.p1_18 = 0;
        vm.scores.p2_18 = 0;
        vm.scores.p1_17 = 0;
        vm.scores.p2_17 = 0;
        vm.scores.p1_16 = 0;
        vm.scores.p2_16 = 0;
        vm.scores.p1_15 = 0;
        vm.scores.p2_15 = 0;
        vm.scores.p1_bull = 0;
        vm.scores.p2_bull = 0; 

       //increases score when player 1 20 img is clicked
       vm.scoreCounter0120 = function scoreCounter0120() {

	       	vm.scores.p1_20 +=1;

	       	if (vm.scores.p1_20 > 3) {
	       		vm.scores.p1_20 = 0;
	       	} 
       };

        //increases score when player 2 20 img is clicked
       vm.scoreCounter0220 = function scoreCounter0220() {

	       	vm.scores.p2_20 +=1;

	       	if (vm.scores.p2_20 > 3) {
	       		vm.scores.p2_20 = 0;
	       	} 
       };

        //increases score when player 1 19 img is clicked
       	vm.scoreCounter0119 = function scoreCounter0119() {

	       	vm.scores.p1_19 +=1;

	       	if (vm.scores.p1_19 > 3) {
	       		vm.scores.p1_19 = 0;
	       	} 
       };

        //increases score when player 2 19 img is clicked
       vm.scoreCounter0219 = function scoreCounter0219() {

	       	vm.scores.p2_19 +=1;

	       	if (vm.scores.p2_19 > 3) {
	       		vm.scores.p2_19 = 0;
	       	} 
       };

       	//increases score when player 1 18 img is clicked
       	vm.scoreCounter0118 = function scoreCounter0118() {

	       	vm.scores.p1_18 +=1;

	       	if (vm.scores.p1_18 > 3) {
	       		vm.scores.p1_18 = 0;
	       	} 
       };

        //increases score when player 2 18 img is clicked
       vm.scoreCounter0218 = function scoreCounter0218() {

	       	vm.scores.p2_18 +=1;

	       	if (vm.scores.p2_18 > 3) {
	       		vm.scores.p2_18 = 0;
	       	} 
       };
       	
       	//increases score when player 1 17 img is clicked
       	vm.scoreCounter0117 = function scoreCounter0117() {

	       	vm.scores.p1_17 +=1;

	       	if (vm.scores.p1_17 > 3) {
	       		vm.scores.p1_17 = 0;
	       	} 
       };

        //increases score when player 2 217 img is clicked
       vm.scoreCounter0217 = function scoreCounter0217() {

	       	vm.scores.p2_17 +=1;

	       	if (vm.scores.p2_17 > 3) {
	       		vm.scores.p2_17 = 0;
	       	} 
       };

       	//increases score when player 1 16 img is clicked
       vm.scoreCounter0116 = function scoreCounter0116() {

	       	vm.scores.p1_16 +=1;

	       	if (vm.scores.p1_16 > 3) {
	       		vm.scores.p1_16 = 0;
	       	} 
       };

        //increases score when player 2 16 img is clicked
       vm.scoreCounter0216 = function scoreCounter0216() {

	       	vm.scores.p2_16 +=1;

	       	if (vm.scores.p2_16 > 3) {
	       		vm.scores.p2_16 = 0;
	       	} 
       };

       	//increases score when player 1 15 img is clicked
       vm.scoreCounter0115 = function scoreCounter0115() {

	       	vm.scores.p1_15 +=1;

	       	if (vm.scores.p1_15 > 3) {
	       		vm.scores.p1_15 = 0;
	       	} 
       };

        //increases score when player 2 15 img is clicked
       vm.scoreCounter0215 = function scoreCounter0215() {

	       	vm.scores.p2_15 +=1;

	       	if (vm.scores.p2_15 > 3) {
	       		vm.scores.p2_15 = 0;
	       	} 
       };

        //increases score when player 1 bull img is clicked
       	vm.scoreCounter01Bull = function scoreCounter01Bull() {

	       	vm.scores.p1_bull +=1;

	       	if (vm.scores.p1_bull > 3) {
	       		vm.scores.p1_bull = 0;
	       	} 
       };

        //increases score when player 2 bull img is clicked
       vm.scoreCounter02Bull = function scoreCounter02Bull() {

	       	vm.scores.p2_bull +=1;

	       	if (vm.scores.p2_bull > 3) {
	       		vm.scores.p2_bull = 0;
	       	} 
       };

      
    });
})();