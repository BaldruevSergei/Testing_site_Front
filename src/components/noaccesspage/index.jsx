import './noaccess.scss';
import Header from '../header';
import { Link } from 'react-router-dom';

export default function NoAccess(){
    return <>
    <div className="noaccess">
        <Header/>
        <main>
            <h1>Внимание</h1>
            <p>У вас нет доступа к данной проверочной работе</p>
            <Link to='/TestLibrary'>Вернуться назад</Link>
        </main>
    </div>
    </>
}