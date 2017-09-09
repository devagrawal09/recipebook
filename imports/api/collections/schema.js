import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

const Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	}
});

export const RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	ingredient: {
		type:  Array,
		label: 'Ingredients'
	},
	'ingredient.$': {
		type: Ingredient,
		label: ''
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue(){
			return this.userId;
		},
		autoform: {
			type: 'hidden'
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue(){
			return new Date();
		},
		autoform: {
			type: 'hidden'
		}
	}
});