class BandSiteApi {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
	}

	async postComment(commentObject) {
		try {
			await axios.post(
				`${this.baseUrl}/comments?api_key=${this.apiKey}`,
				commentObject
			);
		} catch (error) {
			console.log(error);
		}
	}

	async getComments() {
		try {
			const response = await axios.get(
				`${this.baseUrl}/comments?api_key=${this.apiKey}`
			);

			const comments = response.data;

			comments.sort((a, b) => {
				return b.timestamp - a.timestamp;
			});

			return comments;
		} catch (error) {
			console.log(error);
		}
	}

	async getShows() {
		try {
			const response = await axios.get(
				`${this.baseUrl}/showdates?api_key=${this.apiKey}`
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
}
