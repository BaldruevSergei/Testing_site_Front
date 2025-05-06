import { useEffect, useState } from 'react';
import { getAllExams } from '../../../api/services';

function TeacherTests() {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        getAllExams()
            .then(res => setTests(res.data))
            .catch(err => console.error('Ошибка загрузки тестов:', err));
    }, []);

    return (
        <div>
            <h3>Мои тесты</h3>
            <ul>
                {tests.length === 0 ? (
                    <p>Тестов пока нет.</p>
                ) : (
                    tests.map(test => (
                        <li key={test.id}>
                            {test.name} (ID: {test.id})
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TeacherTests;
