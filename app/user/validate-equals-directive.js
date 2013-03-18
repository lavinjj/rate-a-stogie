'use strict';

/* Directives */


Application.Directives.
    directive('validateEquals', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {

            function validateEqual(myValue, otherValue) {
                if (myValue === otherValue) {
                    ctrl.$setValidity('equal', true);
                } else {
                    ctrl.$setValidity('equal', false);
                }
                return myValue;
            }

            scope.$watch(attrs.validateEquals, function(otherModelValue) {
                ctrl.$setValidity('equal', ctrl.$viewValue === otherModelValue);
            });

            ctrl.$parsers.push(function(viewValue) {
                return validateEqual(viewValue, scope.$eval(attrs.validateEquals));
            });

            ctrl.$formatters.push(function(modelValue) {
                return validateEqual(modelValue, scope.$eval(attrs.validateEquals));
            });
        }
    };
});