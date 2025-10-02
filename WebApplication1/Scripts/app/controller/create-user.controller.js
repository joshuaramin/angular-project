var app = angular.module("tattooVaultApp", []);

app.controller("UserController", function($scope, $http) {
    $scope.user = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        birthday: "",
        role: "User",
        password: "",
        isActive: true
    };

    $scope.createUser = function() {
        // Example API call (adjust URL to your backend)
        $http.post("/api/users", $scope.user)
            .then(function(response) {
                alert("User created successfully!");
                window.location = "#!/users";
            }, function(error) {
                alert("Error creating user.");
                console.error(error);
            });
    };
});
