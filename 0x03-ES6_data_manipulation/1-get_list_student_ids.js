export default function getListStudentIds() {
  if (Array.isArray(Array)) return Array.map((x) => x.id);
  return [];
}
