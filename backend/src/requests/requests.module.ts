import { CoachesModule } from "./../coaches/coaches.module";
import { UsersModule } from "./../users/users.module";
import { requestsSchema } from "./schemas/request.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { RequestsService } from "./requests.service";
import { RequestsController } from "./requests.controller";

@Module({
  controllers: [RequestsController],
  providers: [RequestsService],
  imports: [
    UsersModule,
    CoachesModule,
    MongooseModule.forFeature([{ name: "request", schema: requestsSchema }]),
  ],
})
export class RequestsModule {}
