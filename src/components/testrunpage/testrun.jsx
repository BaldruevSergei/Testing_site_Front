import Tests from '../testlibrarypage/notes'
import './testrun.scss';
import { useParams , Link} from 'react-router-dom';
import SideBar from './sidebar';
import { useEffect, useState } from 'react';
export default function TestRun(){
    const {id} = useParams();
    const [test, setTest] = useState({});
    const [currentQuestion, setQuestion] = useState(0);
    useEffect(() => {
        setTest(Tests.find((test) => test.id === parseInt(id)));
    },[id])
    return <>
        <div className="testrun">
            <main>
                <section>
                <div className='topic'>Рабочая панель <span>/</span> <Link to={`/TestLibrary/TestPreview/${id}`}>{test.topic}</Link></div>
                {test.questions && test.questions.length > 0 && (
                    <h1>{currentQuestion + 1}. {test.questions[currentQuestion].title.charAt(0).toUpperCase() + test.questions[currentQuestion].title.slice(1)}</h1>
                )}
                <div className="container">
                {test.questions && test.questions.length > 0 && (
                    <h1>Условие задания: <div>{test.questions[currentQuestion].points}б</div></h1>
                )}  
                <div className='questionContainer'>
                    <div className='question'>
                        {test.questions && test.questions.length > 0 && (
                        test.questions[currentQuestion].question
                        )}  
                    </div>
                    <div className='answer'>
                        {test.questions && test.questions.length > 0 && test.questions[currentQuestion].type === 'input' && (
                            <>
                                <div>Ответ: <input type="text" /></div>
                                <button>Ответить</button>
                            </>
                        )}
                    </div>
                </div>
                </div>
                <div className="arrows"></div>
                </section>
            </main>
            <SideBar id={id} numQuestions={test.numQuestions} maxTime={test.maxTime} currentQuestion={currentQuestion} setQuestion={setQuestion}/>
        </div>
    </>
}