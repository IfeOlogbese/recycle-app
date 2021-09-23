export default class AuthApi {
	static baseUrl = "";

	// Login method
	static login(params) {
		return new Promise(function (resolve, reject) {
			setTimeout(
				() =>
					resolve({
						token: "wefewbfwkrbgkrbgbkj",
						...params,
					}),
				300
			);
		});
	}

	// Signup method
	static signup(params) {
		return new Promise(function (resolve, reject) {
			setTimeout(
				() =>
					resolve({
						token: "wefewbfwkrbgkrbgbkj",
						...params,
					}),
				300
			);
		});
	}
}
