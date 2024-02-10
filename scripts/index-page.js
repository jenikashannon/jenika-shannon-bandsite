let comments = [
	{
		userAvatar: "",
		userName: "Victor Pinto",
		timeStamp: new Date("02/01/2024").getTime(),
		content:
			"Thisisart.Thisisinexplicablemagicexpressedinthepurestway,everythingthatmakesupthismajesticworkdeservesreverence.Letusappreciatethisfor what it is and what it contains.",
	},
	{
		userAvatar: "",
		userName: "Christina Cabrera",
		timeStamp: new Date("10/28/2023").getTime(),
		content:
			"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
	},
	{
		userAvatar: "",
		userName: "Isaac Tadesse",
		timeStamp: new Date("03/2/2023").getTime(),
		content:
			"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
	},
];

const loadComments = (event) => {
	if (typeof event !== "undefined") {
		event.preventDefault();

		// add new comment to start of comments array (to be displayed first)
		comments.unshift({
			userAvatar: "/assets/images/Mohan-muruge.jpg",
			userName: event.target.userName.value,
			timeStamp: new Date(),
			content: event.target.userComment.value,
		});

		// clear input fields
		event.target.reset();
	}

	// clear comments
	let commentContainer = document.querySelector(".comments__feed");
	commentContainer.innerHTML = "";

	// make & style divider
	let commentDividerEl = document.createElement("div");
	commentDividerEl.classList.add("comments__divider");

	commentContainer.append(commentDividerEl);

	// add comments
	comments.forEach((comment) => {
		let commentCardEl = document.createElement("div");
		commentCardEl.classList.add("comment-card");

		// make & style avatar
		let avatarEl = document.createElement("div");
		avatarEl.classList.add("comment-card__avatar");
		if (comment.userAvatar === "") {
			avatarEl.classList.add("comment-card__avatar--blank");
		}

		// make div for remaining content
		let commentCardContainer = document.createElement("div");
		commentCardContainer.classList.add("comment-card__container");

		// make & style name and timestamp
		let commentCardMetadata = document.createElement("div");
		commentCardMetadata.classList.add("comment-card__metadata");

		let commentCardName = document.createElement("h3");
		commentCardName.innerText = comment.userName;
		commentCardName.classList.add("comment-card__name");

		let commentCardTimestamp = document.createElement("h4");
		commentCardTimestamp.classList.add("comment-card__timestamp");
		commentCardTimestamp.innerText = formatTimestamp(comment.timeStamp);

		// make & style comment text
		let commentCardContent = document.createElement("p");
		commentCardContent.innerText = comment.content;
		commentCardContent.classList.add("comment-card__content");

		// make & style divider
		let commentDividerEl = document.createElement("div");
		commentDividerEl.classList.add("comments__divider");

		// add all of the elements to DOM
		commentCardMetadata.append(commentCardName, commentCardTimestamp);
		commentCardContainer.append(commentCardMetadata, commentCardContent);
		commentCardEl.append(avatarEl, commentCardContainer);
		commentContainer.append(commentCardEl, commentDividerEl);
	});
};

const formatTimestamp = (timeStamp) => {
	const minute = 60000;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = week * 4.345; // average # of weeks in a month

	const timePassed = new Date() - timeStamp;

	const timePassedInMinutes = Math.round(timePassed / minute);
	if (timePassedInMinutes <= 1) {
		return "just now";
	} else if (timePassedInMinutes < 60) {
		return timePassedInMinutes + " min ago";
	}

	const timePassedInHours = Math.round(timePassed / hour);
	if (timePassedInHours <= 1) {
		return "1 hour ago";
	} else if (timePassedInHours < 24) {
		return timePassedInHours + " hours ago";
	}

	const timePassedInDays = Math.round(timePassed / day);
	if (timePassedInDays <= 1) {
		return "1 day ago";
	} else if (timePassedInDays < 7) {
		return timePassedInDays + " days ago";
	}

	const timePassedInWeeks = Math.round(timePassed / week);
	if (timePassedInWeeks <= 1) {
		return "1 week ago";
	} else if (timePassedInWeeks < 4.345) {
		return timePassedInWeeks + " weeks ago";
	}

	const timePassedInMonths = Math.round(timePassed / month);
	if (timePassedInMonths <= 1) {
		return "1 month ago";
	} else if (timePassedInMonths < 12) {
		return timePassedInMonths + " months ago";
	}

	const timeStampString = new Date(timeStamp);
	return (
		timeStampString.getMonth() +
		1 +
		"/" +
		timeStampString.getDate() +
		"/" +
		timeStampString.getFullYear()
	);
};

// render comment section on page load
loadComments();

// add submit event listener to comment form
const commentFormEl = document.querySelector(".comment-form");
commentFormEl.addEventListener("submit", loadComments);
