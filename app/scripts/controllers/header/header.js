
app.controller('headerCtrl', ['$scope',
	function($scope) {
		$scope.message = 'HEADER Controller';

		function calculateHeaderOffset(y) {
			$('.header').height(
				$('.header > nav').css({
					'top': Math.max(-y, -300)
				}).height()-69
			);
		}

		$(window).scroll(function (e) {
			calculateHeaderOffset(e.originalEvent.pageY);			
		});
		calculateHeaderOffset(0);
	}
]);