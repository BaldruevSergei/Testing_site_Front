const newTests = [
    {
        'id': 0,
        'subject': 'Физика',
        'topic': 'Квантовая механика',
        'result': '95%',
        'startDate': '01.01.2022',
        'endDate': '15.01.2022',
        'maxTime': 60,
        'numQuestions': 2,
        'maxPoints': 100,
        'numTries': 2,
        'isAccess': true,
        'isRunning': false,
        'isDone': false,
        'questions': [
            {
                type: 'input',
                title: 'arithmetics',
                question: 'what is 1 + 1',
                correctAnswer: 2,
            },
            {
                type: 'multipleChoice',
                title: 'riddle',
                question: 'what year he was born?',
                correctAnswerIndex: 2,
                answers: [
                    '1995',
                    '1992',
                    '1994',
                    '1998'
                ]
            }
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