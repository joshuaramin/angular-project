angular.module("tattooVaultApp", [])
    .controller("UserController", function ($scope) {

        $scope.users = [
            { Id: 1, Username: "jdoe", Email: "jdoe@mail.com", FirstName: "John", LastName: "Doe", Role: "Admin", IsActive: true, CreatedAt: new Date() },
            { Id: 2, Username: "asmith", Email: "asmith@mail.com", FirstName: "Anna", LastName: "Smith", Role: "User", IsActive: false, CreatedAt: new Date() }
        ];

        $scope.successMessage = "Users loaded successfully.";

        $scope.logout = function () {
            alert("Logging out...");
        };

        $scope.toggleUserStatus = function (user) {
            user.IsActive = !user.IsActive;
        };

        $scope.deleteUser = function (id) {
            $scope.users = $scope.users.filter(u => u.Id !== id);
        };
    });