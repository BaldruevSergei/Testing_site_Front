import { useEffect, useState } from 'react';
import { getClasses } from '../../../api/services';

function TeacherClasses() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        getClasses()
            .then(res => setClasses(res.data))
            .catch(err => console.error('Ошибка загрузки классов:', err));
    }, []);

    return (
        <div>
            <h3>Мои классы</h3>
            <ul>
                {classes.length === 0 ? (
                    <p>Классов пока нет.</p>
                ) : (
                    classes.map(cls => (
                        <li key={cls.id}>
                            {cls.name}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TeacherClasses;

