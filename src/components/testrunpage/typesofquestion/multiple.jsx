export default function MultipleChoice(props){
    const {answers, currentQuestion} = props;


    return (
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <input type="checkbox" id={answer} name={`question-${currentQuestion}`} value={answer} />
                        <label htmlFor={answer}>{answer}</label>
                    </li>
                ))}
            </ul>
    );
}