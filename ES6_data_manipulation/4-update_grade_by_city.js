export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((student) => student.location === city)
    .map((student) => {
      const update = newGrades.find((grade) => grade.studentId === student.id);
      if (update) {
        return { ...student, grade: update.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
