import { Template } from 'meteor/templating';

import '/imports/api/collections/RecipeCollection.js';
import './NewRecipe.html';

Template.NewRecipe.events({
	'click .fa-close'(){
		Session.set('newRecipe', false);
	}
});