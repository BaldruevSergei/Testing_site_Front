import { Link } from 'react-router-dom'
import './sidebar.scss'
export default function Sidebar(props){
    const {id, numQuestions} = props;
    return <nav className='sidebar'>
        <div className='back'><Link to={`/TestLibrary/TestPreview/${id}`}><i className="fa fa-angle-left"></i>Назад</Link></div>
        <Link className='currentquestion'><span>1/{numQuestions}</span></Link>
    </nav>
}