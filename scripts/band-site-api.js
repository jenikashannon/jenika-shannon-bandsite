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
			const result = await axios.get(
				`${this.baseUrl}/comments?api_key=${this.apiKey}`
			);
			return result.data;
		} catch (error) {
			console.log(error);
		}
	}

	async getShows() {
		try {
			const result = await axios.get(
				`${this.baseUrl}/showdates?api_key=${this.apiKey}`
			);
			return result.data;
		} catch (error) {
			console.log(error);
		}
	}
}
