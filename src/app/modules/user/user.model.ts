import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'Faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'block'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Example of Pre for Hasing Password
userSchema.pre('save', async function (next) {
  let userInfo = this;
  userInfo.password = await bcrypt.hash(
    userInfo.password,
    Number(config.BCRYPT_SALT_ROUND),
  );
  next();
});

// Password Empty Save
userSchema.post('save', function (doc: TUser, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
