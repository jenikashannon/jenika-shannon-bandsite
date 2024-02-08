let comments = [
	{
		userAvatar: "",
		userName: "Victor Pinto",
		timeStamp: "11/02/2023",
		content:
			"Thisisart.Thisisinexplicablemagicexpressedinthepurestway,everythingthatmakesupthismajesticworkdeservesreverence.Letusappreciatethisfor what it is and what it contains.",
	},
	{
		userAvatar: "",
		userName: "Christina Cabrera",
		timeStamp: "10/28/2023",
		content:
			"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
	},
	{
		userAvatar: "",
		userName: "Isaac Tadesse",
		timeStamp: "10/20/2023",
		content:
			"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
	},
];

const loadComments = (event) => {
	if (typeof event !== "undefined") {
		event.preventDefault();

		let today = new Date().getTime();
		let timeStamp = event.timeStamp;
		let formattedTimeStamp = "";

		if (timeStamp - today < 60000) {
			formattedTimeStamp = "less than 1 minute ago";
		}

		let timeStampMonth = new Date(event.timeStamp).getMonth();
		let timeStampDay = new Date(event.timeStamp).getDay();
		let timeStampYear = new Date(event.timeStamp).getFullYear();
		// console.log(timeStampMonth, timeStampDay, timeStampYear);

		comments.unshift({
			userAvatar: "/assets/images/Mohan-muruge.jpg",
			userName: event.target.userName.value,
			timeStamp: formattedTimeStamp,
			content: event.target.userComment.value,
		});
	}

	let commentContainer = document.querySelector(".comment-feed");
	commentContainer.innerHTML = "";

	comments.forEach((comment) => {
		let commentCardEl = document.createElement("div");
		commentCardEl.classList.add("comment-card");

		// make & style avatar
		let avatarEl = document.createElement("div");
		avatarEl.classList.add("comment-card__avatar");
		avatarEl.setAttribute("src", comment.userAvatar);
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
		commentCardTimestamp.innerText = comment.timeStamp;
		commentCardTimestamp.classList.add("comment-card__timestamp");

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

loadComments();

const commentFormEl = document.querySelector(".comment-form");
commentFormEl.addEventListener("submit", (event) => {
	loadComments(event);
});
