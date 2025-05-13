import { useState } from "react";


export default function Input(props){
    const {currentQuestion, func, studentAnswers} = props;
    const [inputValue, setInputValue] = useState(studentAnswers[currentQuestion] || '');
    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        func(newValue);
    };
    
    return <>
        <div>Ответ: <input 
            type="text" 
            onChange={handleChange}
            value={inputValue}
        /></div>
    </>;
}