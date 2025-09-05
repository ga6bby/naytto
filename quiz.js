const quizData = [
    // the beatles
    {question: "Which city are The Beatles originally from?", options: ["Liverpool","London","Manchester","Birmingham"], answer: "Liverpool"},
    {question: "Which Beatles album features 'Hey Jude'?", options: ["Abbey Road","The White Album","Hey Jude","Revolver"], answer: "Hey Jude"},
    {question: "Who was NOT a member of The Beatles?", options: ["John Lennon","Paul McCartney","Mick Jagger","George Harrison"], answer: "Mick Jagger"},
    {question: "Which genre best describes The Beatles?", options: ["Jazz","Rock/Pop","Blues","Hip-Hop"], answer: "Rock/Pop"},
    {question: "In what decade did The Beatles form?", options: ["1950s","1960s","1970s","1980s"], answer: "1960s"},

    // michael jackson
    {question: "What nickname is Michael Jackson known by?", options: ["King of Rock","King of Soul","King of Pop","King of Blues"], answer: "King of Pop"},
    {question: "Which album is his best-selling record?", options: ["Thriller","Bad","Dangerous","Off the Wall"], answer: "Thriller"},
    {question: "Which dance move is Michael Jackson famous for?", options: ["Moonwalk","Twist","Robot","Breakdance"], answer: "Moonwalk"},
    {question: "Which song did he perform at the 1993 Super Bowl halftime show?", options: ["Billie Jean","Beat It","Smooth Criminal","Bad"], answer: "Billie Jean"},
    {question: "Michael Jackson was part of which family group?", options: ["Jackson 5","The Jacksons","Jackson Family Band","The Pop Kings"], answer: "Jackson 5"},

    // bob dylan
    {question: "Which decade did Bob Dylan rise to fame?", options: ["1950s","1960s","1970s","1980s"], answer: "1960s"},
    {question: "What genre is Bob Dylan most associated with?", options: ["Folk","Rock","Jazz","Pop"], answer: "Folk"},
    {question: "Which song by Dylan became a civil rights anthem?", options: ["Blowin’ in the Wind","Like a Rolling Stone","The Times They Are a-Changin’","All Along the Watchtower"], answer: "Blowin’ in the Wind"},
    {question: "What instrument is Dylan famous for playing while singing?", options: ["Piano","Guitar","Drums","Violin"], answer: "Guitar"},
    {question: "Bob Dylan won the Nobel Prize in which field?", options: ["Literature","Music","Peace","Cultural Studies"], answer: "Literature"},

    // aretha franklin
    {question: "What nickname is Aretha Franklin known by?", options: ["Queen of Rock","Queen of Soul","Lady of Jazz","Diva of Pop"], answer: "Queen of Soul"},
    {question: "Which song is her signature hit?", options: ["Respect","Natural Woman","Think","Chain of Fools"], answer: "Respect"},
    {question: "Aretha Franklin was born in which country?", options: ["UK","USA","Canada","Australia"], answer: "USA"},
    {question: "Which instrument did she often play?", options: ["Guitar","Piano","Drums","Saxophone"], answer: "Piano"},
    {question: "Aretha Franklin was an activist in which movement?", options: ["Civil Rights","Environmental","Women’s Suffrage","Labor Rights"], answer: "Civil Rights"},

    // beyoncé
    {question: "Beyoncé first gained fame as a member of which group?", options: ["Destiny’s Child","Spice Girls","TLC","Sugababes"], answer: "Destiny’s Child"},
    {question: "What is the title of her debut solo album?", options: ["Lemonade","Dangerously in Love","B’Day","Beyoncé"], answer: "Dangerously in Love"},
    {question: "Beyoncé’s visual album 'Lemonade' was released in which year?", options: ["2014","2016","2018","2012"], answer: "2016"},
    {question: "Which song is Beyoncé’s empowerment anthem?", options: ["Single Ladies","Crazy in Love","Halo","Run the World (Girls)"], answer: "Single Ladies"},
    {question: "Beyoncé is married to which rapper?", options: ["Jay-Z","Kanye West","Drake","Eminem"], answer: "Jay-Z"},

    // david bowie
    {question: "Which alter ego is David Bowie famous for?", options: ["Ziggy Stardust","Major Tom","Thin White Duke","All of the above"], answer: "All of the above"},
    {question: "Which decade did Bowie release 'Space Oddity'?", options: ["1960s","1970s","1980s","1950s"], answer: "1960s"},
    {question: "What genre is Bowie associated with?", options: ["Rock/Pop/Experimental","Jazz","Country","Hip-Hop"], answer: "Rock/Pop/Experimental"},
    {question: "David Bowie starred in which sci-fi film?", options: ["Blade Runner","The Man Who Fell to Earth","Star Wars","Tron"], answer: "The Man Who Fell to Earth"},
    {question: "Bowie was British. True or False?", options: ["True","False"], answer: "True"},

    // nirvana / kurt cobain
    {question: "Which city did Nirvana originate from?", options: ["Seattle","Los Angeles","New York","Chicago"], answer: "Seattle"},
    {question: "Who was the lead singer of Nirvana?", options: ["Kurt Cobain","Krist Novoselic","Dave Grohl","Eddie Vedder"], answer: "Kurt Cobain"},
    {question: "Which album made Nirvana famous?", options: ["Bleach","Nevermind","In Utero","MTV Unplugged"], answer: "Nevermind"},
    {question: "Which Nirvana song opens with 'Load up on guns, bring your friends'?", options: ["Come as You Are","Smells Like Teen Spirit","Lithium","Heart-Shaped Box"], answer: "Smells Like Teen Spirit"},
    {question: "Nirvana is associated with which genre?", options: ["Grunge","Punk","Rockabilly","Jazz"], answer: "Grunge"},

    // tupac
    {question: "Tupac’s nickname was?", options: ["Biggie","2Pac","Snoop","Jay-Z"], answer: "2Pac"},
    {question: "Which song is Tupac famous for?", options: ["California Love","Gin and Juice","Juicy","Lose Yourself"], answer: "California Love"},
    {question: "Tupac was also known for acting in films. True or False?", options: ["True","False"], answer: "True"},
    {question: "Tupac’s lyrics often addressed which issues?", options: ["Social injustice","Romantic love","Fantasy stories","Science fiction"], answer: "Social injustice"},
    {question: "Tupac was murdered in which year?", options: ["1996","1994","1998","2000"], answer: "1996"},

    // bob marley
    {question: "Bob Marley was from which country?", options: ["Jamaica","USA","UK","Trinidad"], answer: "Jamaica"},
    {question: "Which song is his most famous anthem?", options: ["No Woman, No Cry","One Love","Buffalo Soldier","Redemption Song"], answer: "No Woman, No Cry"},
    {question: "Bob Marley popularized which genre?", options: ["Reggae","Rock","Jazz","Blues"], answer: "Reggae"},
    {question: "Marley’s music often focused on which theme?", options: ["Social justice","Romantic love","Horror stories","Sci-fi"], answer: "Social justice"},
    {question: "Which band did Bob Marley lead?", options: ["The Wailers","The Skatalites","Toots and the Maytals","Steel Pulse"], answer: "The Wailers"},

    // louis armstrong
    {question: "Which instrument is Louis Armstrong famous for?", options: ["Trumpet","Piano","Saxophone","Drums"], answer: "Trumpet"},
    {question: "What nickname did he have?", options: ["Satchmo","King Louis","Jazzman","Pops"], answer: "Satchmo"},
    {question: "Louis Armstrong is associated with which genre?", options: ["Jazz","Blues","Pop","Rock"], answer: "Jazz"},
    {question: "Which of these songs is a Louis Armstrong hit?", options: ["What a Wonderful World","Respect","Thriller","Smells Like Teen Spirit"], answer: "What a Wonderful World"},
    {question: "Armstrong was an American musician. True or False?", options: ["True","False"], answer: "True"},

    // johnny cash
    {question: "Which nickname is Johnny Cash known by?", options: ["Man in Black","King of Country","Rebel Without a Cause","Country King"], answer: "Man in Black"},
    {question: "Which song is one of his hits?", options: ["Ring of Fire","Love Story","Jolene","Folsom Prison Blues"], answer: "Ring of Fire"},
    {question: "Johnny Cash performed at which famous prison?", options: ["Alcatraz","Folsom","Rikers","Sing Sing"], answer: "Folsom"},
    {question: "Cash is associated with which genre?", options: ["Jazz","Country","Rock","Pop"], answer: "Country"},
    {question: "Johnny Cash was American. True or False?", options: ["True","False"], answer: "True"},

    // daft punk
    {question: "Daft Punk is from which country?", options: ["USA","France","UK","Germany"], answer: "France"},
    {question: "Which genre are they famous for?", options: ["Jazz","EDM/Electronic","Pop","Hip-Hop"], answer: "EDM/Electronic"},
    {question: "Which song is their hit single?", options: ["One More Time","Thriller","Respect","Hey Jude"], answer: "One More Time"},
    {question: "What is unique about Daft Punk’s image?", options: ["Robot helmets","Cowboy hats","Sunglasses only","No instruments"], answer: "Robot helmets"},
    {question: "Daft Punk split in which year?", options: ["2018","2021","2015","2020"], answer: "2021"}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");

function showQuestion() {
    optionsEl.innerHTML = "";
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.addEventListener("click", () => selectAnswer(option));
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(selected) {
    const q = quizData[currentQuestion];
    if(selected === q.answer) score++;
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        showQuestion();
    } else {
        quizContainer.style.display = "none";
        scoreEl.style.display = "block";
        scoreEl.textContent = `Your score: ${score}/${quizData.length}`;
    }
}

showQuestion();
