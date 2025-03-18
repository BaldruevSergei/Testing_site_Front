import Tests from '../testlibrarypage/notes'
import './testrun.scss';
import { useParams , Link} from 'react-router-dom';
import SideBar from './sidebar';
import { useEffect, useState } from 'react';
export default function TestRun(){
    const {id} = useParams();
    const [test, setTest] = useState({});
    const [currentQuestion, setQuestion] = useState(0);
    const [title, setTitle] = useState('')
    useEffect(() => {
        setTest(Tests.find((test) => test.id === parseInt(id)));
    },[id])
    return <>
        <div className="testrun">
            <main>
                <div className='topic'>Рабочая панель <span>/</span> <Link>{test.topic}</Link></div>
                <h1>{currentQuestion + 1}.{title}</h1>
                <div className="container">

                </div>
            </main>
            <SideBar id={id} numQuestions={test.numQuestions} maxTime={test.maxTime} currentQuestion={currentQuestion}/>
        </div>
    </>
}