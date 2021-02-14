import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { User } from 'src/auth/user.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { ICurrentUser } from './../auth/currentuser';
import { UseGuards } from '@nestjs/common';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @User() user: ICurrentUser,
    @Body() createRequestDto: CreateRequestDto,
  ) {
    return this.requestsService.create(user, createRequestDto);
  }

  @Get()
  findAll() {
    return this.requestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestsService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestsService.remove(+id);
  }
}
