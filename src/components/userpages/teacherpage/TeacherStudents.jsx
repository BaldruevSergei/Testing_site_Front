import { useEffect, useState } from 'react';
import { getStudents, importStudents } from '../../../api/services';
function TeacherStudents() {
    const [students, setStudents] = useState([]);
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        getStudents()
            .then(res => setStudents(res.data))
            .catch(err => console.error('Ошибка загрузки учеников:', err));
    };

    const handleImport = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            await importStudents(formData);
            alert('Импорт завершен!');
            fetchStudents(); // обновляем список
        } catch (err) {
            console.error('Ошибка при импорте:', err);
        }
    };

    return (
        <div>
            <h3>Мои ученики</h3>
            <form onSubmit={handleImport}>
                <input type="file" accept=".xls,.xlsx" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">Импортировать Excel</button>
            </form>
            <ul>
                {students.length === 0 ? (
                    <p>Учеников пока нет.</p>
                ) : (
                    students.map(student => (
                        <li key={student.id}>
                            {student.name} ({student.className})
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TeacherStudents;
