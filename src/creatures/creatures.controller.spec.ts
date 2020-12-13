import { Test, TestingModule } from '@nestjs/testing';
import { CreaturesController } from './creatures.controller';

describe('CreaturesController', () => {
  let controller: CreaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreaturesController],
    }).compile();

    controller = module.get<CreaturesController>(CreaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
