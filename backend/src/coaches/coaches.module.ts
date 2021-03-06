import { coachesSchema } from "./schemas/coach.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { CoachesService } from "./coaches.service";
import { CoachesController } from "./coaches.controller";
import { UsersModule } from "./../users/users.module";

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: "coach", schema: coachesSchema }]),
  ],
  controllers: [CoachesController],
  providers: [CoachesService],
  exports: [CoachesService],
})
export class CoachesModule {}
