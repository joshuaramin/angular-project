var app = angular.module("tattooVaultApp", []);

app.controller("RegisterController", function ($scope, $timeout) {
    $scope.user = {};
    $scope.loading = false;
    $scope.errorMessage = "";

    $scope.register = function () {
        if (!$scope.user.firstName || !$scope.user.lastName || !$scope.user.email || !$scope.user.password) {
            $scope.errorMessage = "Please fill in all required fields.";
            return;
        }
        if ($scope.user.password !== $scope.user.confirmPassword) {
            $scope.errorMessage = "Passwords do not match.";
            return;
        }
        if (!$scope.user.acceptTerms) {
            $scope.errorMessage = "You must accept the terms.";
            return;
        }

        $scope.loading = true;
        $scope.errorMessage = "";

        $timeout(function () {
            alert("Registration successful for " + $scope.user.username);
            $scope.loading = false;
        }, 1500);
    };

    $scope.slideToLogin = function () {
        const registerContainer = document.getElementById("registerContainer");
        registerContainer.classList.add("slide-out-left");
        setTimeout(() => {
            window.location.href = "login.html"; // point to your AngularJS login page
        }, 600);
    };
});
