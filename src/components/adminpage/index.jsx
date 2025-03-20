import './adminpage.scss';
import Sidebar from './sidebar';
export default function AdminPage(){
    return <div className="adminpage">
        <Sidebar/>
        <main>
            <div className="container">
                <div className="search">
                    <input type="search" placeholder='Search by ID/Name'/>
                    <button>Search</button>
                </div>

            </div>
        </main>
    </div>
}