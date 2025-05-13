import { useContext, useEffect, useState } from 'react';
import './testresultspage.scss';
import { UserContext } from '../../App';
import { Link, useLocation, useParams, Navigate} from 'react-router-dom';
import Header from '../header';
import ErrorPage from '../errorpage';
import Tests from '../testlibrarypage/notes'
import NoAccessPage from '../noaccesspage';
export default function TestResults(){
    const {isLoggedIn, userInfo}= useContext(UserContext);
    console.log(userInfo);  
        const {id} = useParams();
        const [test, setTest] = useState({});
        const [score, setScore] = useState(0);
        const [percent, setPercent] = useState(0);
        useEffect(() => {
           setTest(Tests.find((test) => test.id === parseInt(id)));
        }, [id]);
        const location = useLocation();
        const testInfo = location.state?.testInfo[0];
        console.log(testInfo);
        useEffect(() => {
            if (!test?.questions || !testInfo?.studentAnswers) return;
            setScore(0);
            let totalScore = 0;
            for(let i = 0; i < test.questions.length; i++) {
                const question = test.questions[i];
                const studentAnswer = testInfo.studentAnswers[i];
                if (question.type === 'input') {
                    if (studentAnswer == question.correctAnswer) {
                        totalScore += question.points;
                    }
                } else if (question.type == 'multipleChoice') {
                    if (JSON.stringify(studentAnswer) === JSON.stringify(question.correctAnswerIndex)) {
                        totalScore += question.points;
                    }
                } else if (question.type == 'singleChoice') {
                    if (studentAnswer === question.correctAnswerIndex) {
                        totalScore += question.points;
                    }
                }
            }
            setScore(totalScore);
            setPercent(Math.floor((totalScore / test.maxPoints) * 100));
        }, [test, testInfo]);
        if (!isLoggedIn) {
            return <Navigate to="/Auth/AuthLinks" state={{ from: location }} />;
        }
        if (!test.isAccess) {
            return <NoAccessPage />;
        }
    return <>
         {test ? test.isAccess ? <div className='testresults'>
                    <Header/>
                                <main>
                                <div className="container">
                                <Link to='/TestLibrary' className='back'>
                                <i className="fa fa-angle-left"><span>Назад</span></i>
                                </Link>
                                    <h1>{test.subject} - {test.topic}</h1>
                                    <div className="information">
                                        <div><strong>Дата теста:</strong> {testInfo?.date || 'Н/Д'}</div>
                                        <div><strong>Затраченное время:</strong> {`${testInfo?.timeTaken[0]}:${testInfo?.timeTaken[1]}` || 'Н/Д'}</div>
                                        <div><strong>Баллы:</strong> {score || 0}/{test.maxPoints}</div>
                                        <div><strong>Процент:</strong> {percent || 0}%</div>
                                        <div><strong>Имя Фамилия: </strong> {userInfo.firstName} {userInfo.lastName}</div>
                                    </div>
                                </div>
                                </main>
                    </div>: <NoAccessPage/> : <ErrorPage/>}
    </>
}