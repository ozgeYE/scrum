import {Test, TestingModule} from '@nestjs/testing';
import {UserService} from './user.service';
import {UserController} from "./user.controller";
import {UserEntity} from "./user.entity";
import {Repository} from "typeorm";

describe('UserService', () => {
    let userService: UserService;
    let userRepository: Repository<UserEntity>;

    beforeEach(() => {
        userRepository = new Repository<UserEntity>();
        userService = new UserService(userRepository);
    });

    it('should return an array of users', async () => {
        const result = [{id: 1, username: 'ozge', createdDate: new Date('2019-06-15 13:40:54.455822')}];
        jest.spyOn(userRepository, 'find').mockImplementation(async () => result);

        expect(await userService.getAllUsers()).toBe(result);
    });
});
