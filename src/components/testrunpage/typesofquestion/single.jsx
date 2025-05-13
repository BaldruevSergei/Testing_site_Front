import { useState } from 'react';

export default function SingleChoice(props){
    const {answers, currentQuestion, func, studentAnswers} = props;
    const [selectedIndex, setSelectedIndex] = useState(studentAnswers[currentQuestion] || null);

    const handleChange = (index) => {
        setSelectedIndex(index);
        func(index); 
    }

    return (
        <ul>
            {answers.map((answer, index) => (
                <li key={index}>
                    <input 
                        type="radio" 
                        id={index}
                        name={`question-${currentQuestion}`}
                        checked={selectedIndex === index}
                        onChange={() => handleChange(index)}
                    />
                    <label htmlFor={index}>{answer}</label>
                </li>
            ))}
        </ul>
    );
}