import Header from '../header';
import Footer from '../footer';
import './errorpage.scss';
import { useParams } from 'react-router-dom';

export default function ErrorPage(){
    const {url} = useParams()
    
    return (
        <div className="ErrorPage">
            <Header/>
            <main>
            <h1>404</h1>
            <p>Page not found</p>
            </main>
            <Footer/>
        </div>
    );
}