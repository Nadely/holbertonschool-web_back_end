export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const result = getListStudents.filter((student) => student.location === city);
  return result;
}
