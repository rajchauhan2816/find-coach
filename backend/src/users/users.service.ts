import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { hash } from 'bcrypt';
import { Role } from './schemas/role.enum';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const { password, ...res } = createUserDto;
    const ecryptPass = await hash(password, 12);
    return this.userModel
      .create({ ...createUserDto, password: ecryptPass, role: Role.User })
      .catch((err) => {
        throw new HttpException('Email Already Exist', 401);
      });
  }

  async findOne(email: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new NotFoundException();
    return user;
  }

  async findAll() {
    return this.userModel.find();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, { ...updateUserDto })
      .catch(() => {
        throw new HttpException('User Not Found', 401);
      });
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);

    if (!user) throw new NotFoundException();
    return user;
  }

  makeCoach(id: Types.ObjectId) {
    return this.userModel.findByIdAndUpdate(id, {
      role: Role.Coach,
    });
  }
}
