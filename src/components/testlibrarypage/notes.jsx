const newTests = [
    {   
        'id': 15321356213,
        'subject': 'Физика',
        'topic': 'Квантовая механика',
        'startDate': '01.01.2022',
        'endDate': '15.01.2022',
        'maxTime': 60,
        'numQuestions': null,
        'maxPoints': null,
        'numTries': 2,
        'isAccess': true,
        'isRunning': false,
        'isDone': false,
        'questions': [
                {
                    type: 'input',
                    title: 'arithmetics',
                    points: 2,
                    question: 'what is 1 + 1',
                    correctAnswer: 2,
                    isAnswered: false,
                },
                {
                    type: 'singleChoice',
                    title: 'riddle',
                    question: 'what year he was born?',
                    correctAnswer: 1995,
                    points: 15,
                    answers: [
                        '1995',
                        '1992',
                        '1994',
                        '1998',
                    ],
                    isAnswered: false,
                },
                {
                    type: 'multipleChoice',
                    title: 'rid4444',
                    question: 'wh321year 321rn?',
                    correctAnswer: 132145,
                    points: 4,
                    answers: [
                        '132145',
                        '13232',
                        '1123',
                        '1421'
                    ],
                    isAnswered: false,
                },
                {
                    type: 'input',
                    title: 'arithmetics',
                    points: 2,
                    question: 'what is 1 + 1',
                    correctAnswer: 2,
                    isAnswered: false,
                },
                {
                    type: 'singleChoice',
                    title: 'riddle',
                    question: 'what year he was born?',
                    correctAnswer: 1995,
                    points: 15,
                    answers: [
                        '1995',
                        '1992',
                        '1994',
                        '1998',
                    ],
                    isAnswered: false,
                },
                {
                    type: 'input',
                    title: 'arithmetics',
                    points: 2,
                    question: 'what is 1 + 1',
                    correctAnswer: 2,
                    isAnswered: false,
                },
                {
                    type: 'singleChoice',
                    title: 'riddle',
                    question: 'what year he was born?',
                    correctAnswer: 1995,
                    points: 15,
                    answers: [
                        '1995',
                        '1992',
                        '1994',
                        '1998',
                    ],
                    isAnswered: false,
                },
                {
                    type: 'multipleChoice',
                    title: 'rid4444',
                    question: 'wh321year 321rn?',
                    correctAnswer: 132145,
                    points: 4,
                    answers: [
                        '132145',
                        '13232',
                        '1123',
                        '1421'
                    ],
                    isAnswered: false,
                },
                {
                    type: 'input',
                    title: 'arithmetics',
                    points: 2,
                    question: 'what is 1 + 1',
                    correctAnswer: 2,
                    isAnswered: false,
                },
                {
                    type: 'singleChoice',
                    title: 'riddle',
                    question: 'what year he was born?',
                    correctAnswer: 1995,
                    points: 15,
                    answers: [
                        '1995',
                        '1992',
                        '1994',
                        '1998',
                    ],
                    isAnswered: false,
                },
        ]   
    },
];
newTests.forEach(test => {
    test.numQuestions = test.questions.length;
    test.maxPoints = test.questions.reduce((sum, question) => {
        return sum + question.points;
    }, 0);
});

export default newTests;