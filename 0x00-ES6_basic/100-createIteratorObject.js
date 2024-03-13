export default function createIteratorObject(report) {
  const emp = Object.values(report.allEmployees);
  // return emp.flat();
  return [].concat(...emp);
}
