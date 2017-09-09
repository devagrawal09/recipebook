import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'toggleMenuItem'(id, currentState){
		RecipeCollection.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	'deleteRecipe'(id){
		RecipeCollection.remove(id);
	}
});