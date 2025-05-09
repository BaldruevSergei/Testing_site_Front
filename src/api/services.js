import API from './api';

// --- TEACHERS ---
export const getTeachers = () => API.get('/api/teachers');
export const createTeacher = (teacherData) => API.post('/api/teachers', teacherData);
export const importTeachers = (formData) => API.post('/api/teachers/import', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
});
export const deleteAllTeachers = () => API.delete('/api/teachers/delete-all');

// --- SUBJECTS ---
export const getSubjects = () => API.get('/api/subjects');
export const createSubject = (subjectData) => API.post('/api/subjects', subjectData);

// --- STUDENTS ---
export const getStudents = () => API.get('/api/students');
export const createStudent = (studentData) => API.post('/api/students', studentData);
export const importStudents = (formData) => API.post('/api/students/import', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
});
export const getStudentsByClass = (className) => API.get(`/api/students/class/${className}`);
export const deleteAllStudents = () => API.delete('/api/students/students');

// --- STUDENT EXAMS ---
export const submitStudentExam = (examData) => API.post('/api/student-exams/submit', examData);
export const startStudentExam = (examStartData) => API.post('/api/student-exams/start', examStartData);

// --- QUESTIONS ---
export const uploadQuestions = (formData) => API.post('/api/questions/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
});
export const getSubjectsForQuestions = () => API.get('/api/questions/subjects');
export const getQuestionGroup = (groupId) => API.get(`/api/questions/group/${groupId}`);
export const getGroupAnswers = (groupId) => API.get(`/api/questions/group/${groupId}/answers`);
export const getExams = () => API.get('/api/questions/exams');
export const getExamsBySubject = (subjectId) => API.get(`/api/questions/exams/subject/${subjectId}`);
export const deleteQuestion = (questionId) => API.delete(`/api/questions/${questionId}`);
export const deleteAllQuestionsInGroup = (groupId) => API.delete(`/api/questions/group/${groupId}/deleteAll`);

// --- QUESTION GROUPS ---
export const createQuestionGroup = (groupData) => API.post('/api/question-groups', groupData);

// --- EXAMS ---
export const getAllExams = () => API.get('/api/exams');
export const createExam = (examData) => API.post('/api/exams', examData);

// --- CLASSES ---
export const getClasses = () => API.get('/api/classes');
export const createClass = (classData) => API.post('/api/classes', classData);

// --- Auth ---
export const authLogin = (studentInfo) => API.post('/api/auth/login', studentInfo);