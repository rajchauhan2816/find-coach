import { AlreadyCoachException } from './../exceptions/already-coach.exception';
import { InjectModel } from '@nestjs/mongoose';
import { Coach } from './schemas/coach.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';

@Injectable()
export class CoachesService {
  constructor(
    private usersService: UsersService,
    @InjectModel('coach') private coachModel: Model<Coach>,
  ) { }
  async create({ email }: { email: string }, createCoachDto: CreateCoachDto) {
    try {
      const user = await this.usersService.findOne(email);
      const coach = await this.coachModel.create({
        ...createCoachDto,
        user: user._id,
      });
      await this.usersService.makeCoach(user._id);
      return coach;
    } catch (error) {
      throw new AlreadyCoachException();
    }
  }

  async findAll() {
    const coaches = await this.coachModel.find();
    return coaches.map((c) => {
      const coach = c.toObject();
      delete coach.user.password;
      return coach;
    });
  }

  findOne(id: string) {
    return this.coachModel.findById(id);
  }

  update(updateCoachDto: UpdateCoachDto) {
    return `This action returns all coaches`;
  }

  remove(id: number) {
    return `This action removes a #${id} coach`;
  }
}
