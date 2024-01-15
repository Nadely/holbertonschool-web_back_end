export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {...employeesList},
    getNumberOfDepartments: (employees) => Object.keys(employees).length
  };
  return report;
}
