import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/testwork.css'
export default function TestWork(){
      return <>
            <Header/>
            <div className="testworkPage">
                  <div className="testwork">
                        <div className="newExams">
                              
                              <h1 className='Heading'>
                                    <span>
                              <i class="fa fa-bell">
                              </i></span>Новые работы</h1>
                        </div>
                        <div className="previousExams"></div>
                  </div>
            </div>
            <Footer/>
      </>
}