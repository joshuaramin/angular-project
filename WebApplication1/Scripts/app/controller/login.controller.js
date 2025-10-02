angular.module("tattooVaultApp", [])
    .controller("LoginController", ["$scope", "$timeout", "$window", function ($scope, $timeout, $window) {
        $scope.user = {
            email: "",
            password: "",
            rememberMe: false
        };

        $scope.loading = false;
        $scope.errorMessage = "";

        // Simulated login function
        $scope.login = function () {
            if (!$scope.user.email || !$scope.user.password) {
                $scope.errorMessage = "Please enter both email and password.";
                return;
            }

            $scope.loading = true;
            $scope.errorMessage = "";

            // Fake delay for loading animation
            $timeout(function () {
                if ($scope.user.email === "test@test.com" && $scope.user.password === "1234") {
                    alert("Login Successful!");
                    $window.location.href = "/dashboard";
                } else {
                    $scope.errorMessage = "Invalid email or password.";
                }
                $scope.loading = false;
            }, 1500);
        };

        // Slide animation to register
        $scope.slideToRegister = function () {
            const loginContainer = document.getElementById('loginContainer');
            loginContainer.classList.add('slide-out-left');
            $timeout(function () {
                $window.location.href = "/register";
            }, 600);
        };
    }]);
