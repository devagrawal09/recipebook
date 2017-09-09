import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '/imports/api/collections/methods.js'
import './SingleRecipe.html';

Template.RecipeSingle.onCreated(function(){
	let self = this;
	self.autorun(function(){
		let id = FlowRouter.getParam('id');
		self.subscribe('single-recipe', id); 
	});
});

Template.RecipeSingle.helpers({
	recipe(){
		let id = FlowRouter.getParam('id');
		return RecipeCollection.findOne({ _id: id }); 
	}
});

Template.RecipeSingle.events({
	'click .edit-recipe'(){
		Session.set('editMode', true);
	},
	'submit #updateRecipe'(){
		Session.set('editMode', false);
	},
	'click .remove-recipe'(){
		let id = FlowRouter.getParam('id');
		Meteor.call('deleteRecipe', id);
		FlowRouter.go('recipe-book');
	}
});