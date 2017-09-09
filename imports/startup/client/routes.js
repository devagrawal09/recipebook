import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//defining routes

import '/imports/ui/layouts/MainLayout.js';
import '/imports/ui/layouts/HomeLayout.js';

import '/imports/ui/pages/AllRecipes.js';
import '/imports/ui/pages/SingleRecipe.js';
import '/imports/ui/pages/Menu.js';
import '/imports/ui/pages/ShoppingList.js';

Accounts.onLogin(function() {
	FlowRouter.go('recipe-book');
});

Accounts.onLogout(function() {
	FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(con, red) {
	if( !Meteor.userId() ) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action(){
		if ( Meteor.userId() ) {
			FlowRouter.go('recipe-book');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action(){
		BlazeLayout.render('MainLayout', {main : 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe-single',
	action(){
		BlazeLayout.render('MainLayout', {main : 'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});

AutoForm.setDefaultTemplate('materialize');