function teacherDto(teacher) {
  return {
    id:              teacher.id,
    user_id:         teacher.user_id,
    employee_number: teacher.employee_number,
    department:      teacher.department,
    first_name:      teacher.first_name,
    last_name:       teacher.last_name,
    email:           teacher.email,
    phone:           teacher.phone,
    created_at:      teacher.created_at,
  };
}

module.exports = teacherDto;
