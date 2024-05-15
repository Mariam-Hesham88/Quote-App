var quots = [
    "“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "You only live once, but if you do it right, once is enough.”",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    "“It is better to be hated for what you are than to be loved for what you are not.”",
    "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    "“Without music, life would be a mistake.”",
    "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
    "“Always forgive your enemies; nothing annoys them so much.”",
];

var Author = [
    "― Oscar Wilde",
    "― Marilyn Monroe",
    "― Bernard M. Baruch",
    "― Mae West",
    "― J.K. Rowling, Harry Potter and the Goblet of Fire",
    "― Andre Gide, Autumn Leaves",
    "― Oscar Wilde, The Happy Prince and Other Stories",
    "― Friedrich Nietzsche, Twilight of the Idols",
    "― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",
    "― Oscar Wilde",
];

function rondomQuote() {
    var min = 0;
    var max = (quots.length-1);
    var i = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("q").innerHTML = quots[i];
    document.getElementById("a").innerHTML = Author[i];
    // console.log(quots[i]);
    // console.log(Author[i]);
}