import Tests from '../testlibrarypage/notes'
import './testrun.scss';
import { useParams , Link} from 'react-router-dom';
import SideBar from './sidebar';
import { useEffect, useState } from 'react';
import MultipleChoice from './typesofquestion/multiple';
import SingleChoice from './typesofquestion/single';
import Input from './typesofquestion/input';
export default function TestRun(){
    const {id} = useParams();
    const [test, setTest] = useState({});
    const [currentQuestion, setQuestion] = useState(0);
    useEffect(() => {
        setTest(Tests.find((test) => test.id === parseInt(id)));
    },[id])
    return (<>
        {test.questions && test.questions.length > 0 && (
        <div className="testrun">
        <main>
            <section>
            <div className='topic'>Рабочая панель <span>/</span> <Link to={`/TestLibrary/TestPreview/${id}`}>{test.topic}</Link></div>
                <h1>{currentQuestion + 1}. {test.questions[currentQuestion].title.charAt(0).toUpperCase() + test.questions[currentQuestion].title.slice(1)}</h1>
            <div className="container" >
                <h1>Условие задания: <div>{test.questions[currentQuestion].points}б</div></h1>
            <div className='questionContainer'>
                <div className='question'  onMouseDown={(e) => e.preventDefault()}>
                    {test.questions[currentQuestion].question}
                </div>
                <div className='answer'>
                    {test.questions[currentQuestion].type === 'input' && (
                        <Input answers={test.questions[currentQuestion].answers} currentQuestion={currentQuestion}/>
                    )}
                    {test.questions[currentQuestion].type === 'singleChoice' && (
                        <SingleChoice answers={test.questions[currentQuestion].answers} currentQuestion={currentQuestion}/>
                    )}
                    {test.questions[currentQuestion].type === 'multipleChoice' && (
                        <MultipleChoice answers={test.questions[currentQuestion].answers} currentQuestion={currentQuestion}/>
                    )}
                </div>
            </div>
            </div>
            <div className="arrows">
                    <span style={{display: currentQuestion > 0 ? 'flex' : 'none'}} onClick={() => {currentQuestion > 0 ? setQuestion(prev => prev - 1) : ''}}><i className="fa fa-arrow-circle-left"></i>Предыдущее задание</span>
                    <span style={{display: test.questions.length - 1 > currentQuestion ? 'flex' : 'none'}} onClick={() => {test.questions.length - 1> currentQuestion ? setQuestion(prev => prev + 1) : ''}}><i className="fa fa-arrow-circle-right"></i>Следующее задание</span>
            </div>
            </section>
        </main>
        <SideBar id={id} numQuestions={test.numQuestions} maxTime={test.maxTime} currentQuestion={currentQuestion} setQuestion={setQuestion}/>
    </div>
        )}
    </>)
}