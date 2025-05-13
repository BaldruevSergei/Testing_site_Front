import { useState } from "react";

export default function MultipleChoice(props){
    const {answers, currentQuestion, func, studentAnswers} = props;

    const [checkedIndexes, setCheckedIndexes] = useState(
        studentAnswers[currentQuestion] || []
    );

    const change = (index) => {
        const newCheckedIndexes = [...checkedIndexes];
        if (newCheckedIndexes.includes(index)) {
            newCheckedIndexes.splice(newCheckedIndexes.indexOf(index), 1);
        } else {
            newCheckedIndexes.push(index);
        }
        setCheckedIndexes(newCheckedIndexes);
        func(newCheckedIndexes.length === 0 ? null : newCheckedIndexes);
    }

    return (
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <input 
                            type="checkbox" 
                            id={index} 
                            name={`question-${currentQuestion}`} 
                            checked={checkedIndexes.includes(index)}
                            onChange={() => change(index)}
                        />
                        <label htmlFor={index}>{answer}</label>
                    </li>
                ))}
            </ul>
    );
}