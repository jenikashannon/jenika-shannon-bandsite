const mainApi = new BandSiteApi("3eefb917-a4a5-4146-bc27-db1debb2d374");

const loadComments = async (event) => {
	if (event) {
		event.preventDefault();

		const userName = event.target.userName.value;
		const userComment = event.target.userComment.value;

		// select form fields & remove error styling
		const formFieldEls = document.querySelectorAll(".comment-form__field");

		formFieldEls.forEach((formFieldEl) => {
			formFieldEl.classList.remove("comment-form__field--error");
		});

		// add error styling to empty form fields
		if (!(userName && userComment)) {
			formFieldEls.forEach((formFieldEl) => {
				if (!formFieldEl.value) {
					formFieldEl.classList.add("comment-form__field--error");
				}
			});

			// if empty response, do not continue
			return;
		}

		// create new comment object and POST
		const newComment = {
			name: userName,
			comment: userComment,
		};

		await mainApi.postComment(newComment);

		// clear input fields
		event.target.reset();
	}

	// GET and sort comments
	const comments = await mainApi.getComments();

	comments.sort((a, b) => {
		return b.timestamp - a.timestamp;
	});

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
		commentCardName.innerText = comment.name;
		commentCardName.classList.add("comment-card__name");

		let commentCardTimestamp = document.createElement("h4");
		commentCardTimestamp.classList.add("comment-card__timestamp");
		commentCardTimestamp.innerText = formatTimestamp(comment.timestamp);

		// make & style comment text
		let commentCardContent = document.createElement("p");
		commentCardContent.innerText = comment.comment;
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
		return "an hour ago";
	} else if (timePassedInHours < 24) {
		return timePassedInHours + " hours ago";
	}

	const timePassedInDays = Math.round(timePassed / day);
	if (timePassedInDays <= 1) {
		return "a day ago";
	} else if (timePassedInDays < 7) {
		return timePassedInDays + " days ago";
	}

	const timePassedInWeeks = Math.round(timePassed / week);
	if (timePassedInWeeks <= 1) {
		return "a week ago";
	} else if (timePassedInWeeks < 4.345) {
		return timePassedInWeeks + " weeks ago";
	}

	const timePassedInMonths = Math.round(timePassed / month);
	if (timePassedInMonths <= 1) {
		return "a month ago";
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
