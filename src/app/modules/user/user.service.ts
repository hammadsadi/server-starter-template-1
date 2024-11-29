import config from '../../config';
import { StudentModel } from '../student/student.model';
import { Student } from '../student/studentInterface';
import { TUser } from './user.interface';
import { User } from './user.model';

// Student Data Save to DB
export const studentDataSavedToDatabase = async (
  password: string,
  students: Student,
) => {
  // Declare Set Password and Role
  const userInfo: Partial<TUser> = {};
  userInfo.role = 'student';
  userInfo.password = password || (config.DEFAULT_PASS as string);

  // Generated Id
  userInfo.id = '20230001';
  // Create User
  const result = await User.create(userInfo);

  if (Object.keys(result).length) {
    students.id = result.id;
    students.user = result._id;
    const studentsResult = await StudentModel.create(students);
    return studentsResult;
  }
};

export const userServices = {
  studentDataSavedToDatabase,
};
