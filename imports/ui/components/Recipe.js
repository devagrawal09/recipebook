import { Template } from 'meteor/templating';

import '/imports/api/collections/methods.js';
import './Recipe.html';

Template.Recipe.onCreated(function() {
	this.editMode = new ReactiveVar(false);
});

Template.Recipe.events({
	'click .toggle-menu'(e){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash'(){
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil'(e, t){
		t.editMode.set(!t.editMode.get());
	}
});

Template.Recipe.helpers({
	updateRecipeId(){
		return this._id;
	},
	editMode(){
		return Template.instance().editMode.get();
	}
});