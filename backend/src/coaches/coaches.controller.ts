import { ICurrentUser } from './../auth/currentuser';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { UseGuards } from '@nestjs/common';
import { User } from 'src/auth/user.decorator';

@Controller('coaches')
export class CoachesController {
  constructor(private readonly coachesService: CoachesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@User() user: ICurrentUser, @Body() createCoachDto: CreateCoachDto) {
    return this.coachesService.create(user, createCoachDto);
  }

  @Get()
  findAll() {
    return this.coachesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coachesService.findOne(id);
  }

  @Put()
  update(@Body() updateCoachDto: UpdateCoachDto) {
    return this.coachesService.update(updateCoachDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coachesService.remove(+id);
  }
}
