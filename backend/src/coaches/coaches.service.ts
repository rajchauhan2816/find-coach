import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';

@Injectable()
export class CoachesService {
  async create(createCoachDto: CreateCoachDto) {}

  findAll() {
    return `This action returns all coaches`;
  }

  findOne(id: string) {
    return `This action returns all coaches`;
  }

  update(updateCoachDto: UpdateCoachDto) {
    return `This action returns all coaches`;
  }

  remove(id: number) {
    return `This action removes a #${id} coach`;
  }
}
