var size = 13;

var quotes = ["You can do anything, but not everything.",
"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
"The richest man is not he who has the most, but he who needs the least.",
"You miss 100 percent of the shots you never take.",
"Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
"You must be the change you wish to see in the world.",
"When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
"The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.",
"To the man who only has a hammer, everything he encounters begins to look like a nail.",
"We are what we repeatedly do; excellence, then, is not an act but a habit.",
"A wise man gets more use from his enemies than a fool from his friends.",
"Do not seek to follow in the footsteps of the men of old; seek what they sought.",
"Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny."
];

var authors = ["David Allen",
"Antoine de Saint-Exupéry",
"Anonymous",
"Wayne Gretzky",
"Ambrose Redmoon",
"Gandhi",
"Lin-Chi",
"A. A. Milne",
"Abraham Maslow",
"Aristotle",
"Baltasar Gracian",
"Basho",
"Lao-Tze"
];

function setRandomQuote () {
	var num = Math.floor( Math.random() * size );
	var quote = quotes[num];
	var author = authors[num];

	$("blockquote").html( "<p>" + quote + "</p>" + "<small>" + author + "</small>" );
	console.log( num );
}

$(document).ready( function() {
	setRandomQuote();
} );