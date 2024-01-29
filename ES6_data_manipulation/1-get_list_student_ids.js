export default function getListStudentsIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
	return [];
  } else {
	return getListStudents.map(student => student.id)
  }
}
