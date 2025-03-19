import { Link } from "react-router-dom";

export default function TestList(props){
    const {maxPoints, questions, setList, setQuestion} = props;
 return <div className="container">
            <h1>Список заданий: <div>{maxPoints}б</div></h1>
            <div className="questionContainer">
                <ul className="list">
                {
                    questions.map((question,index) => (
                        <li><span>{index + 1}.</span> <span><Link onClick={() => {setList(false); setQuestion(index)}}>{question.title}</Link></span> <span className="isAnswered">{question.isAnswered ? 'Отвечено': '	Не отвечено'}</span><span className="point">{question.points}б</span></li>
                    ))
                }
                </ul>
            </div>
        </div>
}