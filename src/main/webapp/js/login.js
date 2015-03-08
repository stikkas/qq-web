angular.module("Login", [])
		.controller("LoginController", ['$http', '$location', function ($http, $location) {
				var ctrl = this;
				ctrl.login = function () {
					$http.get('login', {
						params: {
							username: ctrl.username,
							password: ctrl.password
						}
					}).success(function (data) {
						if (data.res) {
							window.location = '/qq-web/';
						} else {
							alert("Неверный логин / пароль");
						}
					}).error(function (data) {
						console.log(data);
					});
				};
			}
		]);

