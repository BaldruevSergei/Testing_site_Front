import TeacherTests from './teacherpage/TeacherTests';
import TeacherStudents from './teacherpage/TeacherStudents';
import TeacherClasses from './teacherpage/TeacherClasses';


export default function Main(props) {
    const { links, currentLink } = props;

    const renderContent = () => {
        if (currentLink === 0) {
            return <TeacherTests />;
        } else if (currentLink === 1) {
            return <TeacherStudents />;
        } else if (currentLink === 2) {
            return <TeacherClasses />;
        } else {
            return <div>Выберите раздел</div>;
        }
    };

    return (
        <main>
            <h1 className='title'>
                <i className={links[currentLink].icon}></i>
                {links[currentLink].title}
            </h1>
            <div className="container">
                <div className="search">
                    <input type="search" placeholder='Search by Subject/Test/ID/Date...' />
                    <button>Search</button>
                    <div className="number">Кол. {links[currentLink].number}: <span></span></div>
                </div>
                <div className='results'>
                    {renderContent()}
                </div>
            </div>
        </main>
    );
}
