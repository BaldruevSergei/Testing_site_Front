export default function Main(props){
    const {links, currentLink} = props;

    return (
        <main>
            <h1 className='title'><i className={links[currentLink].icon}></i>{links[currentLink].title}</h1>
            <div className="container">
                <div className="search">
                    <input type="search" placeholder='Search by Subject/Test/ID/Date...'/>
                    <button>Search</button>
                    <div className="number">Кол. {links[currentLink].numberof} <span></span></div>
                </div>
                <div className='results'>
                    
                </div>
            </div>
        </main>
    )
}