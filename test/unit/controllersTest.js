/**
 * Created by George on 2017/10/27.
 */
'use strict';

describe('Test for login password length', function () {

    beforeEach(module('mainApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_
    }))

    describe("$scope.passGrade", function () {
        it("sets the password to strong if the length > 8", function () {
            var $scope = {}
            var controller = $controller('loginCtrl', {$scope: $scope})
            $scope.data.password = '123456789'
            $scope.pasGrade()
            expect($scope.strength).toEqual('strong')
        })
    })

})