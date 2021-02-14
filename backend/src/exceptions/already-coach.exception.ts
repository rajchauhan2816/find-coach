import { HttpException } from '@nestjs/common';
export class AlreadyCoachException extends HttpException {
  constructor() {
    super('You are already a coach', 400);
  }
}
