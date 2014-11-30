/// <reference path="jquery.d.ts" />

import m1 = require('module1');
import m2 = require('module2');
import NewModule = require('NewModule');

$(function() {
	$('#btn1').click(() => {
		m1.hello();
	});

	$('#btn2').click(() => {
		m2.hello();
	});

	$('#btn3').click(() => {
		var u = new NewModule.User("Jakub", "Jed");
		console.log(u.getFullName());
	});
});


