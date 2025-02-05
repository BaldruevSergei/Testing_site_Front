import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/testwork.css'
export default function TestWork(){
      return <>
            <Header/>
            <div className="testworkPage">
                  <div className="testwork">
                        <h1>Проверочные работы</h1>
                        <Exams/>
                  </div>
            </div>
            <Footer/>
      </>
}

function Exams() {
      const currentExams = [];
      const completedExams = [];
    
      const hasCurrentExams = currentExams.length > 0;
      const hasCompletedExams = completedExams.length > 0;
    
      const CurrentEmpty = <p className="empty">У тебя сейчас нет работ, которые ты можешь выполнить.</p>;
      const CompletedEmpty = <p className="empty">У тебя нет работ, которые ты выполнил.</p>;
    
      let completedExamsHTML = (
        <ul className="completedExams">
          {hasCompletedExams
            ? completedExams.map((student) => (
                <li key={student.id}>
                  <span className='date'>{student.date}</span>
                  <span className='subject'>{student.name}</span>
                  <span className='Topic'>{student.topic}</span>
                  <span className='Grade'>{student.grade}</span>
                </li> 
              ))
            : CompletedEmpty}
        </ul>
      );
    
      let currentExamsHTML = (
        <ul className="currentExams">
          {hasCurrentExams ? currentExams.map((list) => <li key={list.id}>{list.name}</li>) : CurrentEmpty}
        </ul>
      );
    
      return (
        <>
          <div className="Exams">
            <h1 className="Heading">
              <span>
                <i className="fa fa-bell"></i>
              </span>
              Новые работы
            </h1>
            {currentExamsHTML}
          </div>
          <div className="Exams">
            <h1 className="Heading">
              <span>
                <i className="fa fa-check"></i>
              </span>
              Завершённые работы
            </h1>
            {completedExamsHTML}
          </div>
        </>
      );
    }