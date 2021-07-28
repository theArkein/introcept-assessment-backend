import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      title: 'Introcept',
      description: "Assessment for full stack web developer job",
      modules: ['clients']
    };
  }
}
