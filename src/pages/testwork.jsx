import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/testwork.css'
export default function TestWork(){
      return <>
            <Header/>
            <div className="testworkPage">
                  <div className="testwork">
                        <h1>Проверочные работы, 'name'</h1>
                        <Exams/>
                  </div>
            </div>
            <Footer/>
      </>
}

function Exams() {
      const currentExams = [ ]; // Array for the exams 
      const completedExams = [ ]; // Array for the exams 
    
      const hasCurrentExams = currentExams.length > 0;// Boolean
      const hasCompletedExams = completedExams.length > 0; // Boolean
    
      const CurrentEmpty = <p className="empty">У тебя сейчас нет работ, которые ты можешь выполнить.</p>; // if the array is empty
      const CompletedEmpty = <p className="empty">У тебя нет работ, которые ты выполнил.</p>; // if the array is empty

      let completedExamsHTML = [] // Render the exams to html
      let completedExamsElements = (
     <>
          {hasCompletedExams
            ? completedExams.map((student) => (
                completedExamsHTML.unshift(<li key={student.id}>
                  <span className='date'>{student.date}</span>
                  <span className='subject'>{student.name}</span>
                  <span className='Topic'>{student.topic}</span>
                  <span className='Grade'>{student.grade}</span>
                </li> )
              ))
            : completedExamsHTML = CompletedEmpty}
       </> // logic to put the students info into a list element
      );
      let currentExamsHTML = [] // Render the exams
      let currentExamsElements = (
        <>
          {hasCurrentExams ? currentExams.map((list) => currentExamsHTML.unshift(<li key={list.id}>{list.name}</li>)) : currentExamsHTML = CurrentEmpty}
        </>
      ); // logic to put the students info into a list element
    
      return (
        <>
          <div className="Exams">
            <h1 className="Heading">
              <span>
                <i className="fa fa-bell"></i>
              </span>
              Новые работы
            </h1>
            <ul className="currentExams">
            {currentExamsHTML}
            </ul>
          </div>
          <div className="Exams">
            <h1 className="Heading">
              <span>
                <i className="fa fa-check"></i>
              </span>
              Завершённые работы
            </h1>
               <ul className="completedExams">
            {completedExamsHTML}
            </ul>
          </div>
        </>
      );
    }