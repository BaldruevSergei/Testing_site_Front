export default function Input(props){
    const {answers, currentQuestion} = props;
    return <>
    <div>Ответ: <input type="text" /></div>
    <button>Ответить</button>
            </>
}