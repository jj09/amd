/// <reference path="jquery.d.ts" />
define(["require", "exports", 'module1', 'module2', 'NewModule'], function(require, exports, m1, m2, NewModule) {
    $(function () {
        $('#btn1').click(function () {
            m1.hello();
        });

        $('#btn2').click(function () {
            m2.hello();
        });

        $('#btn3').click(function () {
            var u = new NewModule.User("Jakub", "Jed");
            console.log(u.getFullName());
        });
    });
});
