app.controller("EditUserController", function ($scope, $http, $routeParams, $location) {
    var vm = this;
    vm.user = {};

    // Load user data (replace URL with your API endpoint)
    $http.get("/api/users/" + $routeParams.id).then(function (response) {
        vm.user = response.data;
    });

    vm.saveUser = function () {
        $http.put("/api/users/" + vm.user.id, vm.user).then(function () {
            vm.successMessage = "User updated successfully!";
            $location.path("/users"); // redirect to users list
        });
    };
});
