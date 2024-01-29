export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return 0;
  }
  const result = getListStudents.reduce((accumulator, student) => accumulator + student.id, 0);
  return result;
}
