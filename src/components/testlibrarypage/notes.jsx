const newTests = [
    
];
newTests.forEach(test => {
    test.numQuestions = test.questions.length;
    test.maxPoints = test.questions.reduce((sum, question) => {
        return sum + question.points;
    }, 0);
});

export default newTests;