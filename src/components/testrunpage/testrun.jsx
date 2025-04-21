import Tests from '../testlibrarypage/notes'
import './testrun.scss';
import { useParams , Link, useLocation, Navigate} from 'react-router-dom';
import SideBar from './sidebar';
import { useContext, useEffect, useState } from 'react';
import MultipleChoice from './typesofquestion/multiple';
import SingleChoice from './typesofquestion/single';
import Input from './typesofquestion/input';
import TestList from './testlist';
import ErrorPage from '../errorpage';
import { UserContext } from '../../App';
export default function TestRun(){
    const {id} = useParams();
    const [test, setTest] = useState({});
    const [currentQuestion, setQuestion] = useState(0);
    const [testList, setList] = useState(false);
    const {isLoggedIn} = useContext(UserContext);
    useEffect(() => {
        setTest(Tests.find((test) => test.id === parseInt(id)));
    },[id]);

    const location = useLocation();
        if (!isLoggedIn) {
            return <Navigate to="/Auth/AuthLinks" state={{ from: location }} />;
        }

    return (<>
        {test && test.questions && test.questions.length > 0  ? (
        <div className="testrun">

        <main>
            <section>
                <div className='topic'>Рабочая панель {!testList ? (<><span>/</span> <Link onClick={() => setList(true)}>{test.topic}</Link></>) : ''}</div>
                <h1>
                    {!testList ? `${currentQuestion + 1}. ${test.questions[currentQuestion].title.charAt(0).toUpperCase() + test.questions[currentQuestion].title.slice(1)}` : test.topic}
                </h1>
           {!testList ? 
           (
            <>
            <div className="container" >
                <h1>Условие задания: <div>{test.questions[currentQuestion].points}б</div></h1>
                
            <div className='questionContainer'>
                <div className='question'  onMouseDown={(e) => e.preventDefault()}>
                    {test.questions[currentQuestion].question}
                </div>
                <div className='answer' onSubmit={(e) => e.preventDefault}>
                    {test.questions[currentQuestion].type === 'input' && (
                        <Input answers={test.questions[currentQuestion].answers} currentQuestion={currentQuestion}/>
                    )}
                    {test.questions[currentQuestion].type === 'singleChoice' && (
                        <SingleChoice answers={test.questions[currentQuestion].answers} currentQuestion={currentQuestion}/>
                    )}
                    {test.questions[currentQuestion].type === 'multipleChoice' && (
                        <MultipleChoice answers={test.questions[currentQuestion].answers} currentQuestion={currentQuestion}/>
                    )}
                   <button>Ответить</button>
                </div>
            </div>

            </div>
            <div className="arrows">
                    <span style={{display: currentQuestion > 0 ? 'flex' : 'none'}} onClick={() => {currentQuestion > 0 ? setQuestion(prev => prev - 1) : ''}}><i className="fa fa-arrow-circle-left"></i>Предыдущее задание</span>
                    <span onClick={() => {setList(true)}}><i class="fa fa-arrow-circle-up"></i>Список заданий</span>
                    <span style={{display: test.questions.length - 1 > currentQuestion ? 'flex' : 'none'}} onClick={() => {test.questions.length - 1> currentQuestion ? setQuestion(prev => prev + 1) : ''}}><i className="fa fa-arrow-circle-right"></i>Следующее задание</span>
            </div>
            </>
            ) : <TestList maxPoints={test.maxPoints} questions={test.questions} setList={setList} setQuestion={setQuestion}/> 
        }
          
            </section>
        </main>

        <SideBar id={id} numQuestions={test.numQuestions} maxTime={test.maxTime} currentQuestion={currentQuestion} setQuestion={setQuestion} setList={setList} testList={testList}/>
       </div>
        ) : <ErrorPage/>}
    </>)
}

