import Tests from '../testlibrarypage/notes'
import './testrun.scss';
import { useParams , Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
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
    const [currentQuestionValue, setQuestionValue] = useState(null);
    const [currentSeconds, setSeconds] = useState(0);
    const [testList, setList] = useState(false);
    const {isLoggedIn} = useContext(UserContext);
    const [studentAnswers, setStudentAnswers] = useState({});
    useEffect(() => {
        setTest(Tests.find((test) => test.id === parseInt(id)));
    },[id]);

    const location = useLocation();
        if (!isLoggedIn) {
            return <Navigate to="/Auth/AuthLinks" state={{ from: location }} />;
        }

  
    const saveAnswer = () => {
        if(currentQuestionValue === studentAnswers[currentQuestion]) {
            alert('Вы не изменили ответ');
            return;
        }
        setStudentAnswers(prevAnswers => ({
            ...prevAnswers,
            [currentQuestion]: currentQuestionValue 
        }));
    }
    const navigate = useNavigate();
    const finishTest = () => {
        if(confirm('Вы уверены, что хотите завершить тест?')){
            if(test.questions.length !== Object.keys(studentAnswers).length) {
                alert('Пожалуйста, ответьте на все вопросы');
                return;
            }
            navigate(`/TestLibrary/TestRun/TestResults/${id}`, { state: { from: location , testInfo: [
                {
                        questions: test.questions,
                        studentAnswers: studentAnswers,
                        date: new Date().toLocaleDateString(),
                        timeTaken: [
                            Math.floor(currentSeconds / 60) % 60,
                            currentSeconds % 60,
                        ]
                }
            ]} });
        }
    }
    useEffect(() => {
        setQuestionValue(studentAnswers[currentQuestion] || null);
    },[currentQuestion])
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
                <h1>Условие задания: <div><span className='isAnswered' style={{color: test.questions[currentQuestion].isAnswered ? 'rgb(92, 231, 92)' : 'red'}}>{test.questions[currentQuestion].isAnswered ? 'Отвечено' : 'Не отвечено'}</span> : {test.questions[currentQuestion].points}б</div></h1>
                
            <div className='questionContainer'>
                <div className='question'  onMouseDown={(e) => e.preventDefault()}>
                    {test.questions[currentQuestion].question}
                </div>
                <div className='answer' onSubmit={(e) => e.preventDefault}>
                    {test.questions[currentQuestion].type === 'input' && (
                        <Input answers={test.questions[currentQuestion].answers} currentQuestion={currentQuestion} func={setQuestionValue} studentAnswers={studentAnswers}/>
                    )}
                    {test.questions[currentQuestion].type === 'singleChoice' && (
                        <SingleChoice answers={test.questions[currentQuestion].answers} currentQuestion={currentQuestion} func={setQuestionValue} studentAnswers={studentAnswers}/>
                    )}
                    {test.questions[currentQuestion].type === 'multipleChoice' && (
                        <MultipleChoice answers={test.questions[currentQuestion].answers} currentQuestion={currentQuestion} func={setQuestionValue} studentAnswers={studentAnswers}/>
                    )}
                    <div className='buttonContainer'>
                   <button onClick={() => {
                    
                    if(currentQuestionValue === null) {
                        alert('Пожалуйста, введите ответ');
                        return;
                    }
                    
                    saveAnswer();
                    test.questions[currentQuestion].isAnswered = true;
                    
                    if(test.questions.length - 1 === currentQuestion) {
                        setList(true);
                        return;
                    } 
                    if(currentQuestionValue !== studentAnswers[currentQuestion]) {
                        setQuestion(prev => prev + 1);
                        return;
                    }
                   }}>Ответить</button>
                   {test.questions.length - 1 === currentQuestion ? <button onClick={finishTest}>Завершить тест</button> : ''}
                   </div>
                   
                </div>
            </div>

            </div>
            <div className="arrows"></div>
            <div className="arrows">
                    <span style={{display: currentQuestion > 0 ? 'flex' : 'none'}} onClick={() => {currentQuestion > 0 ? setQuestion(prev => prev - 1) : ''}}><i className="fa fa-arrow-circle-left"></i>Предыдущее задание</span>
                    <span onClick={() => {setList(true)}}><i class="fa fa-arrow-circle-up"></i>Список заданий</span>
                    <span style={{display: test.questions.length - 1 > currentQuestion ? 'flex' : 'none'}} onClick={() => {test.questions.length - 1> currentQuestion ? setQuestion(prev => prev + 1) : ''}}><i className="fa fa-arrow-circle-right"></i>Следующее задание</span>
            </div>
            </>
            ) : <TestList maxPoints={test.maxPoints} questions={test.questions} setList={setList} setQuestion={setQuestionValue} finishTest={finishTest}/> 
        }
          
            </section>
        </main>

        <SideBar id={id} numQuestions={test.numQuestions} maxTime={test.maxTime} currentQuestion={currentQuestion} setQuestion={setQuestion} setList={setList} testList={testList} test={test} setSeconds={setSeconds} currentSeconds={currentSeconds}/>
       </div>
        ) : <ErrorPage/>}
    </>)
}

