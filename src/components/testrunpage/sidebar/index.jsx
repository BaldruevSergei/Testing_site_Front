import { Link } from 'react-router-dom'
import './sidebar.scss'
import { useEffect, useState } from 'react';
import TestList from '../testlist';
export default function Sidebar(props){
    const {id, numQuestions, maxTime, setQuestion, setList, testList} = props;
    const [questionsLists, setLists] = useState([]);
    const [currentSeconds, setSeconds] = useState(0);
    
    useEffect(() => {
        setSeconds(maxTime * 60)
        const q = [];
        for(let i = 1; i <= numQuestions; i++){
            q.push(<li key={i} onClick={() => {setQuestion(i - 1); setList(false)}}><span>{i}</span></li>);
        }
        setLists(q);
    },[numQuestions])

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSecond => {
                if(prevSecond === 0){
                    return TestFinished();
                }
                return prevSecond - 1
            })
        },1000)
        return () => clearInterval(interval)
    },[])

    const TestFinished = () => {
        clearInterval(interval)
    }
    
    return <nav className='sidebar'>
        <div className='back'><Link to={!testList ?`/TestLibrary/TestPreview/${id}` : ''} onClick={testList ? () => setList(!testList) : null}><i className="fa fa-angle-left"></i>{testList ? 'Назад' : 'Выйти'}</Link></div>
        <div className="time">
        <i class='far fa-clock'></i>
        {Math.floor(currentSeconds / 60)}:{currentSeconds % 60 < 10 ? '0' + currentSeconds % 60 : currentSeconds % 60}
        </div>
        <div className='questionsContainer'>
             <ul className='questions'>
               {questionsLists}
             </ul>
        </div>
        <Link onClick={() => setList(true)}className='questionList'><span>Список заданий</span></Link>
    </nav>
}