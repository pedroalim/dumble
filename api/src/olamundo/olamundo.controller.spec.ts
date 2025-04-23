import { Test, TestingModule } from '@nestjs/testing';
import { OlamundoController } from './olamundo.controller';

describe('OlamundoController', () => {
  let controller: OlamundoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OlamundoController],
    }).compile();

    controller = module.get<OlamundoController>(OlamundoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
