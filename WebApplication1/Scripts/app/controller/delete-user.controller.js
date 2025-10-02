var app = angular.module("tattooVaultApp", []);

app.controller("DeleteUserController", function($scope, $http, $window) {
    // Example: Preloaded user (replace with API fetch if needed)
    $scope.user = {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        email: "john@example.com",
        role: "User",
        isActive: true,
        createdAt: new Date("2024-09-10")
    };

    $scope.isDeleting = false;

    $scope.confirmDelete = function() {
        var confirmed = $window.confirm("Are you absolutely sure you want to delete user \"" + $scope.user.email + "\"? This action cannot be undone.");
        if (!confirmed) return;

        $scope.isDeleting = true;

        // Example API call (adjust to your backend route)
        $http.post("/api/users/delete/" + $scope.user.id)
            .then(function(response) {
                alert("User deleted successfully!");
                $window.location.href = "#!/users";
            })
            .catch(function(error) {
                alert("Error deleting user.");
                console.error(error);
                $scope.isDeleting = false;
            });
    };
});
