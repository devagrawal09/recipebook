import { Mongo } from 'meteor/mongo';

import { RecipeSchema } from './schema.js';

RecipeCollection = new Mongo.Collection('recipes');

RecipeCollection.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

RecipeCollection.attachSchema( RecipeSchema );