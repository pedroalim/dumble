import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OlamundoController } from './olamundo/olamundo.controller';

@Module({
  imports: [],
  controllers: [AppController, OlamundoController],
  providers: [AppService],
})
export class AppModule {}
