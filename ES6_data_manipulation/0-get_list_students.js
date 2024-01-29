export default function getListStudents() {
  const StudentsList = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return StudentsList.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
  }));
}
