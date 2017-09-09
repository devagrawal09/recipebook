import { Meteor } from 'meteor/meteor';

Meteor.publish('recipes', function() {
	return RecipeCollection.find({ author: this.userId });
});

Meteor.publish('single-recipe', function(id) {
	check(id, String);
	return RecipeCollection.find({ _id: id });
});