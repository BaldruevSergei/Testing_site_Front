import { Link } from 'react-router-dom'
import './sidebar.scss'
import { useEffect, useState } from 'react';
export default function Sidebar(props){
    const {id, numQuestions, maxTime} = props;
    const [questionsLists, setLists] = useState([]);
    const [currentSeconds, setSeconds] = useState(0);

    useEffect(() => {
        setSeconds(maxTime * 60)
        const q = [];
        for(let i = 1; i <= numQuestions; i++){
            q.push(<li key={i}><span>{i}</span></li>);
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

    }
    return <nav className='sidebar'>
        <div className='back'><Link to={`/TestLibrary/TestPreview/${id}`}><i className="fa fa-angle-left"></i>Назад</Link></div>
        <div className="time">
        <i class='far fa-clock'></i>
        {Math.floor(currentSeconds / 60)}:{currentSeconds % 60 < 10 ? '0' + currentSeconds % 60 : currentSeconds % 60}
        </div>
        <div className='questionsContainer'>
             <ul className='questions'>
               {questionsLists}
             </ul>
        </div>
        <Link className='questionList'><span>Список заданий</span></Link>
    </nav>
}