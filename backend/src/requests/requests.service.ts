import { CoachesService } from "./../coaches/coaches.service";
import { UsersService } from "./../users/users.service";
import { InjectModel } from "@nestjs/mongoose";
import { Request } from "./schemas/request.schema";
import { Injectable } from "@nestjs/common";
import { CreateRequestDto } from "./dto/create-request.dto";
import { UpdateRequestDto } from "./dto/update-request.dto";
import { Model, Types } from "mongoose";

@Injectable()
export class RequestsService {
  constructor(
    private usersService: UsersService,
    private coachService: CoachesService,
    @InjectModel("request") private requestModel: Model<Request>,
  ) {}
  async create(
    { email }: { email: string },
    createRequestDto: CreateRequestDto,
  ) {
    const user = await this.usersService.findOne(email);
    const req = {
      from: user._id,
      to: Types.ObjectId(createRequestDto.coachUserId),
      message: createRequestDto.text,
      createdAt: new Date().toISOString(),
    };
    const rc = await this.requestModel.create(req);
    return rc;
  }

  findAll() {
    return `This action returns all requests`;
  }

  async findOwnRequest({ email }: { email: string }) {
    const user = await this.usersService.findOne(email);
    return this.requestModel.find({ from: user._id });
  }
  async findCoachRequest(id: string) {
    const coach = await this.coachService.findOne(id);
    console.log(coach);
    return this.requestModel.find({ to: coach._id });
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
