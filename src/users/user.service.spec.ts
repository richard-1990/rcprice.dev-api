import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, Connection } from 'typeorm';

describe('UserService', () => {
  let service: UserService;

  let repo: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);

    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return for findAll', async () => {
    const testUser: User = {
      id: 1,
      firstName: 'richard',
      lastName: 'price',
      createdAt: new Date('2020-03-04 09:44:48'),
      updatedAt: new Date('2020-03-04 09:44:48'),
    };
    // notice we are pulling the repo variable and using jest.spyOn with no issues
    jest.spyOn(repo, 'find').mockResolvedValueOnce([testUser]);
    expect(await service.findAll()).toEqual([testUser]);
  });
});
