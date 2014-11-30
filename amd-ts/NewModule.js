define(["require", "exports"], function(require, exports) {
    

    var NewModule;
    (function (NewModule) {
        function add(x, y) {
            return x + y;
        }
        NewModule.add = add;

        var User = (function () {
            function User(fName, lName) {
                this.FirstName = fName;
                this.LastName = lName;
            }
            User.prototype.getFullName = function () {
                return this.FirstName + " " + this.LastName;
            };
            return User;
        })();
        NewModule.User = User;
    })(NewModule || (NewModule = {}));
    return NewModule;
});
