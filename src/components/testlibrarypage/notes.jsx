const newTests = [
    {
        'id': 0,
        'subject': 'History, Geography',
        'topic': 'Mongol',
        'result': '95%',
        'startDate': '01.01.2022',
        'endDate': '15.01.2022',
        'maxTime': 60,
        'numQuestions': 2,
        'numTries': 2,
        'isAccess': true,
        'isRunning': false,
        'isDone': false,
        'questions': [
            {
                type: 'input',
                title: 'Нэг зөв хариулттай асуулт (Хялбар)',
                question: 'Монголын хамгийн өндөр уул аль нь вэ?',
                correctAnswer: 'Хүйтэн оргил',
                points: 1,
                isAnswered: false,
            },
            {
                type: 'multipleChoice',
                title: 'Олон зөв хариулттай, сонголттой асуулт (Дунд түвшин)',
                question: 'Дараах ургамлуудаас аль нь эмийн ургамалд тооцогддог вэ? (2 ба түүнээс дээш зөв хариулт байж болно)',
                correctAnswerIndex: [0, 2, 4],
                answers: [
                    'Жамба',
                    'Сонгино',
                    'Үзэмчин харгана',
                    'Хуайс',
                    'Үрэл мод'
                ],
                points: 2,
                isAnswered: false,
            },
            {
                type: 'singleChoice',
                title: 'Сонголттой асуулт — Зөвхөн нэг зөв хариулттай',
                question: '"Монгол" гэх үгийн уг гарлын талаар олон онол, тайлбар байдаг. Эдгээрээс аль нь хэл шинжлэл, түүхийн үүднээс хамгийн өргөнөөр хүлээн зөвшөөрөгдсөн, шинжлэх ухааны үндэслэлтэй хариулт вэ?',
                correctAnswerIndex: 3,
                answers: [
                    '“Мөнх улс” гэдэг үгнээс гаралтай – Монгол гэдэг нь "мөнх" гэсэн утгатай.',
                    '“Манггуд” овгийн нэрнээс гаралтай – Эртний Монгол аймгийн нэр.',
                    'Төв Азийн эртний хэлний “эрэлхэг” гэсэн утгатай үгнээс гаралтай.',
                    'Монгол гэдэг үг нь XIII зуунд анх зохиогдсон, тодорхой угсаатны бүлгийг нэрлэх шинэ нэр байсан.'
                ],
                points: 3,
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