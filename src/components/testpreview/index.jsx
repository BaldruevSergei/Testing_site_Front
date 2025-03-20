import { useContext, useEffect, useState } from 'react';
import './testpreviewpage.scss';
import { UserContext } from '../../App';
import { Link, useLocation, useParams, Navigate} from 'react-router-dom';
import Header from '../header';
import ErrorPage from '../errorpage';
import Tests from '../testlibrarypage/notes'
import NoAccessPage from '../noaccesspage';
    export default function TestPreview() {
        const {isLoggedIn}= useContext(UserContext);
        const {id} = useParams();
        const [test, setTest] = useState({});
        useEffect(() => {
           setTest(Tests.find((test) => test.id === parseInt(id)));
        }, [id]);

        const location = useLocation();
        if (!isLoggedIn) {
            return <Navigate to="/Auth/AuthLinks" state={{ from: location }} />;
        }
        return <>
            {test ? test.isAccess ? <div className='testpreview'>
            <Header/>
            <main>
            <div className="container">
            <Link to='/TestLibrary' className='back'>
            <i className="fa fa-angle-left"><span>Назад</span></i>
            </Link>
                <h1>{test.subject} - {test.topic}</h1>
                <div className="information">
                    <div><strong>Доступна с:</strong> {test.startDate}</div>
                    <div><strong>Доступна до:</strong> {test.endDate}</div>
                    <div><strong>Количество заданий:</strong> {test.numQuestions}</div>
                    <div><strong>Максимальное количество баллов:</strong> {test.maxPoints}</div>
                    <div><strong>Осталось попыток:</strong> {test.numTries}</div>
                    <div><strong>Максимальное время:</strong> {test.maxTime} минут</div>
                </div>
                <div className="start"><Link to={`/TestLibrary/TestRun/${test.id}`}>Начать</Link></div>
            </div>
            </main>
            </div>: <NoAccessPage/> : <ErrorPage />}
            </>
    }
