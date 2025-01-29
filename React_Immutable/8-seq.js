import immutable from 'immutable';

const { Seq } = immutable;

// Accept an object and filter the students with a grade >= 70
// and console.log first and last name with first letter in capital
export default function printBestStudents(grades) {
  // convert the object to a Seq and filter the students with a grade >= 70
  const students = Seq(grades).filter((student) => student.score >= 70)
    .map((student) => (
      {
        ...student,
        firstName: `${student.firstName.charAt(0).toUpperCase()}${student.firstName.slice(1)}`,
        lastName: `${student.lastName.charAt(0).toUpperCase()}${student.lastName.slice(1)}`,
      }
    ));

  // Log filtered students
  console.log(students.toObject());
}
