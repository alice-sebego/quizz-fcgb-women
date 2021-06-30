/** -------------------------------
* Gestion of Color's div questions
-------------------------------- */
const questions = [
    document.getElementById("question1"),
    document.getElementById("question2"),
    document.getElementById("question3"),
    document.getElementById("question4"),
    document.getElementById("question5"),
    document.getElementById("question6"),
    document.getElementById("question7"),
    document.getElementById("question8"),
    document.getElementById("question9"),
    document.getElementById("question10"),
    document.getElementById("question11")
]

/** --------------------------
* Array of bad answers
--------------------------- */
const allBadAnswers = [
    [
        document.getElementById('Bruges'),
        document.getElementById('Merignac'),
        document.getElementById('Lormont')
    ],
    [
        document.getElementById('1998'),
        document.getElementById('2007'),
        document.getElementById('2009')
    ],
    [
        document.getElementById('11sept'),
        document.getElementById('26sept'),
        document.getElementById('20dec')
    ],
    [
        document.getElementById('Chatelin'),
        document.getElementById('Cascarino'),
        document.getElementById('Asseyi')
    ],
    [
        document.getElementById('Brettes'),
        document.getElementById('Stehelin'),
        document.getElementById('Miart')
    ],
    [
        document.getElementById('3eme'),
        document.getElementById('7eme'),
        document.getElementById('9eme')
    ],
    [
        document.getElementById('11'),
        document.getElementById('21'),
        document.getElementById('16')
    ],
    [
        document.getElementById('2'),
        document.getElementById('3'),
        document.getElementById('5')
    ],
    [
        document.getElementById('Nayler'),
        document.getElementById('Lavogez'),
        document.getElementById('Tarrieu')
    ],
    [
        document.getElementById('Dauba'),
        document.getElementById('Garcia'),
        document.getElementById('Sousa')
    ],
    [
        document.getElementById('Lyonnais'),
        document.getElementById('Paris'),
        document.getElementById('Montpellier')
    ]

];

/** --------------------------
* Array of right answers
--------------------------- */
const answersGood = [
    document.getElementById("Blanquefort"),
    document.getElementById("2015"),
    document.getElementById("20mars"),
    document.getElementById("Gilles"),
    document.getElementById("Sainte-Germaine"),
    document.getElementById("4eme"),
    document.getElementById("00"),
    document.getElementById("4"),
    document.getElementById("Petiteau"),
    document.getElementById("Losa"),
    document.getElementById("Marseille")
];

/** --------------------------
* Array of resolve answers
--------------------------- */
const resolveAnswers = [
    "La bonne réponse est l'Entente Sportive Blanquefortaise",
    "La bonne réponse est 2015",
    "La bonne réponse est le 20 mars 2016",
    "La bonne réponse est Vanessa Gilles",
    "La bonne réponse est le stade Sainte-Germaine au Bouscat",
    "La bonne réponse est 4ème au classement de D1",
    "La bonne réponse est un beau 0-0 contre cette sextuple championne d'Europe",
    "La bonne réponse est 4",
    "La bonne réponse est Marie Petiteau",
    "La bonne réponse est Pedro Martinez Losa",
    "La bonne réponse est l\'Olympique de Marseille"
];

export { questions, allBadAnswers, answersGood, resolveAnswers }