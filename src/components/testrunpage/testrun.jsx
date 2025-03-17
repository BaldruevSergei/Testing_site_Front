import Tests from '../testlibrarypage/notes'
import './testrun.scss';
import { useParams } from 'react-router-dom';
import SideBar from './sidebar';
import { useEffect, useState } from 'react';
export default function TestRun(){
    const {id} = useParams();
    const [currentTest, setTest] = useState({});
    useEffect(() => {
        setTest(Tests.find((test) => test.id === parseInt(id)));
    },[id])
    return <>
        <div className="testrun">
            <main>
                
            </main>
            <SideBar id={id} numQuestions={currentTest.numQuestions}/>
        </div>
    </>
}