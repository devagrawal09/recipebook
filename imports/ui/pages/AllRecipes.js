import { Template } from 'meteor/templating';

import '../components/NewRecipe.js';
import '../components/Recipe.js';
import './AllRecipes.html';

Template.Recipes.onCreated(function(){
	let self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	recipes(){
		return RecipeCollection.find({});
	}
});

Template.Recipes.events({
	'click .new-recipe'(){
		Session.set('newRecipe', true);
	}
});