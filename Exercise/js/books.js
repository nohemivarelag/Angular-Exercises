(function() {
    var app = angular.module('BookStoreApp', []);

    app.controller('BooksController', function($scope, $http) {
        $http.get('public/package.json')
            .then(function(res) {
                $scope.booksData = res.data;
            });
    });
    app.controller('ReviewController', function () {
		this.review = {};

		this.addReview = function(book) {
			book.reviews.push(this.review);
		}
	});
})();
