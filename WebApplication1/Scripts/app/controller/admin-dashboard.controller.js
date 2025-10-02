var app = angular.module("tattooVaultApp", []);

app.controller("DashboardController", function ($scope, $window) {
    $scope.adminName = "Admin";

    $scope.stats = {
        totalUsers: 15,
        activeUsers: 12,
        adminUsers: 2
    };

    $scope.quickActions = [
        { icon: "👥", title: "Manage Users", description: "View and edit user accounts", link: "#!/users" },
        { icon: "➕", title: "Add New User", description: "Create new user accounts", link: "#!/create-user" },
        { icon: "🖼️", title: "Manage Tattoos", description: "View tattoo collections", link: "#!/tattoos" },
        { icon: "📊", title: "Analytics", description: "View statistics and insights", link: "#!/analytics" }
    ];

    $scope.recentActivity = [
        // Example activities
        "User JohnDoe logged in",
        "Admin updated role for JaneSmith"
    ];

    $scope.goTo = function (link) {
        $window.location.href = link;
    };
});
