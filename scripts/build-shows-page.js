let shows = [
	{
		date: "Mon Sept 09 2024",
		venue: "Ronald Lane",
		location: "San Francisco, CA",
	},
	{
		date: "Tue Sept 17 2024",
		venue: "Pier 3 East",
		location: "San Francisco, CA",
	},
	{
		date: "Sat Oct 12 2024",
		venue: "View Lounge",
		location: "San Francisco, CA",
	},
	{
		date: "Sat Nov 16 2024",
		venue: "Hyatt Angency",
		location: "San Francisco, CA",
	},
	{
		date: "Mon Sept 09 2024",
		venue: "Ronald Lane",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Nov 29 2024",
		venue: "Moscow Center",
		location: "San Francisco, CA",
	},
	{
		date: "Wed Dec 18 2024",
		venue: "Press Club",
		location: "San Francisco, CA",
	},
];

const renderShows = () => {
	// get shows section
	let showsSectionEl = document.querySelector(".shows");

	// make shows header
	let showsHeaderEl = document.createElement("h2");
	showsHeaderEl.classList.add("shows__header");
	showsHeaderEl.innerText = "Shows";

	// make container for show listings
	let showsContainerEl = document.createElement("div");
	showsContainerEl.classList.add("shows__container");

	showsSectionEl.append(showsHeaderEl, showsContainerEl);

	// make show cards for each show in array
	shows.forEach((show, index) => {
		// add class to first show labels
		if (index === 0) {
			let showCardDateLabelEl = document.createElement("p");
			showCardDateLabelEl.classList.add("show-card-date__label");
			showCardDateLabelEl.innerText = "DATE";

			let showCardVenueLabelEl = document.createElement("p");
			showCardVenueLabelEl.classList.add("show-card-venue__label");
			showCardVenueLabelEl.innerText = "VENUE";

			let showCardLocationLabelEl = document.createElement("p");
			showCardLocationLabelEl.classList.add("show-card-location__label");
			showCardLocationLabelEl.innerText = "LOCATION";

			showCardDateLabelEl.classList.add("show-card-date__label--first");
			showCardVenueLabelEl.classList.add("show-card-venue__label--first");
			showCardLocationLabelEl.classList.add("show-card-location__label--first");

			let showCardLabelEl = document.createElement("div");
			showCardLabelEl.classList.add("show-card__labels");

			showCardLabelEl.append(
				showCardDateLabelEl,
				showCardVenueLabelEl,
				showCardLocationLabelEl
			);

			showsContainerEl.append(showCardLabelEl);
		}

		// make card element
		let showCardEl = document.createElement("div");
		showCardEl.classList.add("show-card");

		// make date container
		let showCardDateEl = document.createElement("div");
		showCardDateEl.classList.add("show-card-date");

		let showCardDateLabelEl = document.createElement("p");
		showCardDateLabelEl.classList.add("show-card-date__label");
		showCardDateLabelEl.innerText = "DATE";

		let showCardDateContentEl = document.createElement("p");
		showCardDateContentEl.classList.add("show-card-date__content");
		showCardDateContentEl.innerText = show.date;

		showCardDateEl.append(showCardDateLabelEl, showCardDateContentEl);

		//make venue container
		let showCardVenueEl = document.createElement("div");
		showCardVenueEl.classList.add("show-card-venue");

		let showCardVenueLabelEl = document.createElement("p");
		showCardVenueLabelEl.classList.add("show-card-venue__label");
		showCardVenueLabelEl.innerText = "VENUE";

		let showCardVenueContentEl = document.createElement("p");
		showCardVenueContentEl.classList.add("show-card-venue__content");
		showCardVenueContentEl.innerText = show.venue;

		showCardVenueEl.append(showCardVenueLabelEl, showCardVenueContentEl);

		//make location container
		let showCardLocationEl = document.createElement("div");
		showCardLocationEl.classList.add("show-card-location");

		let showCardLocationLabelEl = document.createElement("p");
		showCardLocationLabelEl.classList.add("show-card-location__label");
		showCardLocationLabelEl.innerText = "LOCATION";

		let showCardLocationContentEl = document.createElement("p");
		showCardLocationContentEl.classList.add("show-card-location__content");
		showCardLocationContentEl.innerText = show.location;

		showCardLocationEl.append(
			showCardLocationLabelEl,
			showCardLocationContentEl
		);

		// make button
		let showCardButton = document.createElement("button");
		showCardButton.classList.add("show-card__button");
		showCardButton.innerHTML = "BUY TICKETS";

		// make divider
		let showsDividerEl = document.createElement("div");
		showsDividerEl.classList.add("shows__divider");

		// append everything to card
		showCardEl.append(
			showCardDateEl,
			showCardVenueEl,
			showCardLocationEl,
			showCardButton
		);

		// append card to section
		showsContainerEl.append(showCardEl, showsDividerEl);
	});
};

renderShows();

// select all show cards
const showCardEls = document.querySelectorAll(".show-card");

// show card styling on click
const styleShowCardEls = (showCardEl) => {
	// set all cards to default styling
	showCardEls.forEach((showCardEl) => {
		showCardEl.classList.remove("show-card--selected");
	});

	// add selected styling to clicked card
	showCardEl.classList.add("show-card--selected");
};

// add click event listener to show cards to adjust styling on click
showCardEls.forEach((showCardEl) => {
	showCardEl.addEventListener("click", () => {
		styleShowCardEls(showCardEl);
	});
});
