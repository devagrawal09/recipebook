import { Template } from 'meteor/templating';

import './Menu.html';

Template.Menu.onCreated(function(){
	let self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

Template.Menu.helpers({
	recipes(){
		return RecipeCollection.find({ inMenu: true });
	}
});