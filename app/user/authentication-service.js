/**
 * Created with JetBrains WebStorm.
 * User: jim.lavin
 * Date: 12/10/12
 * Time: 8:46 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* Services */


Application.Services.factory('authenticate', ['$http', '$rootScope', '$window', 'UserResource', function ($http, $rootScope, $window, UserResource) {
    var authenticate = {
        // data members
        currentUser:null,

        // methods
        login:function (username, password) {
            UserResource.query({UserName:username}).then(function (users) {
                if (users.length === 0) {
                    $window.alert("Invalid user name");
                    return;
                }

                var user = users[0];

                var passwordhash = Sha1.hash(password + Date.parse(user.DateJoined));

                if (passwordhash !== user.Password) {
                    $window.alert("Invalid password.")
                    return;
                }

                authenticate.currentUser = user;
                $rootScope.$broadcast('USER_UPDATED');
            });
        },

        hashPassword:function(password, salt){
            var result = Sha1.hash(password + salt);
            return result;
        },

        isUserLoggedIn:function () {
            if ((authenticate.currentUser !== null) && (authenticate.currentUser !== undefined)) {
                return true;
            }

            return false;
        },

        logout:function () {
            authenticate.currentUser = null;
            $rootScope.$broadcast('USER_UPDATED');
        }
    };

    return authenticate;
} ]);

