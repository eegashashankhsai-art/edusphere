console.log("Welcome to EduSphere!");

// Study Materials Search

function showMessage(category) {

    alert("You selected: " + category +
    ". Study materials will be available here soon!");

}


// Search Materials

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function() {

        let searchValue = this.value.toLowerCase();

        let cards = document.querySelectorAll(".material-card");

        cards.forEach(function(card) {

            let content = card.innerText.toLowerCase();

            if (content.includes(searchValue)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}
// Career Guidance Function

function showCareer(category) {

    const nextSteps = {
        "IT Careers": "Next step: explore Roadmap.sh, freeCodeCamp, Coursera, or HackerRank to choose a path like Web Development, Data Science, Cybersecurity, or Cloud Computing.",
        "Government Jobs": "Next step: explore SSC, UPSC, banking exams, and official government portals to check eligibility and preparation details.",
        "Non-IT Careers": "Next step: explore banking, marketing, finance, or management roles via Careers360, Shine, Naukri, and LinkedIn Jobs.",
        "Internships": "Next step: update your resume, shortlist your interests, and apply to internships on Internshala, LinkedIn, or Naukri.",
        "Resume Building": "Next step: use Canva or Novorésumé to build a professional CV, then tailor it for each role you apply to.",
        "Interview Preparation": "Next step: practice with InterviewBit, Pramp, or GeeksforGeeks and rehearse common questions with confidence."
    };

    const message = nextSteps[category] || "Next step: explore your chosen path and build the right skills to move forward.";

    alert("You selected " + category + ". " + message);

}
// Online Examination System

const quizData = {

    Python: [

        {
            question: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "fun", "define"],
            answer: "def"
        },

        {
            question: "Which symbol is used for comments in Python?",
            options: ["//", "#", "/*", "<!--"],
            answer: "#"
        },

        {
            question: "Which data type stores True or False?",
            options: ["int", "str", "bool", "float"],
            answer: "bool"
        },

        {
            question: "Which function is used to display output?",
            options: ["print()", "display()", "show()", "output()"],
            answer: "print()"
        },

        {
            question: "Which loop is used to iterate over a sequence?",
            options: ["if", "for", "switch", "break"],
            answer: "for"
        }

    ],

    Java: [

        {
            question: "Which keyword is used to create a class in Java?",
            options: ["class", "define", "struct", "object"],
            answer: "class"
        },

        {
            question: "Which method is the starting point of Java?",
            options: ["start()", "run()", "main()", "init()"],
            answer: "main()"
        },

        {
            question: "Which symbol ends a Java statement?",
            options: [".", ":", ";", ","],
            answer: ";"
        },

        {
            question: "Which data type stores whole numbers in Java?",
            options: ["int", "String", "boolean", "double"],
            answer: "int"
        },

        {
            question: "Which keyword creates an object in Java?",
            options: ["this", "new", "static", "void"],
            answer: "new"
        }

    ],

    HTML: [

        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Tool Markup Language",
                "Home Text Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },

        {
            question: "Which tag creates a paragraph?",
            options: ["<h1>", "<p>", "<div>", "<br>"],
            answer: "<p>"
        },

        {
            question: "Which tag creates a hyperlink?",
            options: ["<a>", "<link>", "<href>", "<url>"],
            answer: "<a>"
        },

        {
            question: "Which tag displays the largest heading?",
            options: ["<head>", "<h6>", "<h1>", "<title>"],
            answer: "<h1>"
        },

        {
            question: "Which attribute specifies an image's source?",
            options: ["href", "src", "alt", "link"],
            answer: "src"
        }

    ],

    "Computer Science": [

        {
            question: "What is the full form of CPU?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Control Processing User"
            ],
            answer: "Central Processing Unit"
        },

        {
            question: "Which language is commonly used for database queries?",
            options: ["HTML", "CSS", "SQL", "XML"],
            answer: "SQL"
        },

        {
            question: "Which of these is an operating system?",
            options: ["Python", "Windows", "HTML", "Java"],
            answer: "Windows"
        },

        {
            question: "What does RAM stand for?",
            options: [
                "Random Access Memory",
                "Read Access Machine",
                "Rapid Application Module",
                "Remote Allocation Memory"
            ],
            answer: "Random Access Memory"
        },

        {
            question: "Which number system uses only 0 and 1?",
            options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
            answer: "Binary"
        }

    ]

};


// Start Quiz

let currentQuestions = [];
let currentQuestionIndex = 0;

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function(character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}

function showQuestion(index) {
    currentQuestions.forEach(function(question, questionIndex) {
        const questionCard = document.getElementById("question-" + questionIndex);

        if (questionCard) {
            questionCard.style.display =
                questionIndex === index ? "block" : "none";
        }
    });

    const questionNumber = document.getElementById("questionNumber");

    if (questionNumber) {
        questionNumber.innerText =
            "Question " + (index + 1) + " of " + currentQuestions.length;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function startQuiz(subject) {

    currentQuestions = quizData[subject];

    if (!currentQuestions) {
        console.error("No quiz questions found for subject:", subject);
        return;
    }

    currentQuestionIndex = 0;

    document.getElementById("quizTitle").innerText =
        subject + " Mock Test";

    document.getElementById("quizResult").innerHTML = "";
    document.getElementById("quizSection").hidden = false;

    let questionHTML = "";

    currentQuestions.forEach(function(question, index) {

        questionHTML += `
            <div class="question-card" id="question-${index}"
                 style="display: ${index === 0 ? 'block' : 'none'};">

                <h3>${index + 1}. ${escapeHTML(question.question)}</h3>

                ${question.options.map(function(option) {
                    return `
                        <label>
                            <input type="radio"
                            name="question${index}"
                            value="${escapeHTML(option)}">
                            ${escapeHTML(option)}
                        </label>
                        <br>
                    `;
                }).join("")}

            </div>
        `;

    });
    questionHTML += `
        <div class="question-navigation">

            <p id="questionNumber"></p>

            <button onclick="previousQuestion()">
                Previous
            </button>

            <button onclick="nextQuestion()">
                Next
            </button>

        </div>
    `;

    document.getElementById("quizQuestions").innerHTML =
        questionHTML;

    showQuestion(currentQuestionIndex);

    document.getElementById("quizSection").scrollIntoView({
        behavior: "smooth"
    });

}


// Submit Quiz

function submitQuiz() {

    if (currentQuestions.length === 0) {

        alert("Please select a subject first!");

        return;

    }

    let score = 0;

    let attempted = 0;

    currentQuestions.forEach(function(question, index) {

        let selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (selected) {

            attempted++;

            if (selected.value === question.answer) {

                score++;

            }

        }

    });

    let total = currentQuestions.length;

    let percentage = (score / total) * 100;

    document.getElementById("quizResult").innerHTML = `

        <h3>Examination Result</h3>

        <p>Correct Answers: ${score}</p>

        <p>Incorrect Answers: ${attempted - score}</p>

        <p>Not Attempted: ${total - attempted}</p>

        <p>Total Questions: ${total}</p>

        <p>Your Score: ${percentage.toFixed(2)}%</p>

        <button onclick="startQuizAgain()">
            Retake Examination
        </button>

    `;

}


// Retake Examination

function startQuizAgain() {

    let subject = document.getElementById("quizTitle")
        .innerText.replace(" Mock Test", "");

    startQuiz(subject);

}