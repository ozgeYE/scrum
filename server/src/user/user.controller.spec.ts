import {UserController} from './user.controller';
import {UserService} from './user.service';
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import {async} from "rxjs/internal/scheduler/async";

describe('User Controller', () => {
    let userController: UserController;
    let userService: UserService;
    let userRepository: Repository<UserEntity>;

    beforeEach(() => {
        userService = new UserService(userRepository);
        userController = new UserController(userService);
    });

    it('should return an array of users', async () => {
        const result = [{id: 1, username: 'ozge', createdDate: new Date('2019-06-15 13:40:54.455822')}];
        jest.spyOn(userService, 'getAllUsers').mockImplementation(async () => result);

        expect(await userController.getAllUsers()).toBe(result);
    });

    it('should return an user by id', async () => {
        const result = {id: 1, username: 'ozge', createdDate: new Date('2019-06-15 13:40:54.455822')};
        jest.spyOn(userService, 'getUser').mockImplementation(async () => result);

        expect(await userController.getUser(1)).toBe(result);
    });

    it('should create an user', async () => {
        const result = [{id: 1, username: 'ozge', createdDate: new Date('2019-06-15 13:40:54.455822')}];
        jest.spyOn(userService, 'createUser').mockImplementation( async () => result);

        expect(await userController.createUser(result)).toBe(result);
    });
    //

    it('should update an user by id', async () => {
        const data = [{id: 1, username: 'ozge', createdDate: new Date('2019-06-15 13:40:54.455822')}];
        const result = {id: 1, username: 'gamze', createdDate: new Date('2019-06-14 13:40:54.455822')};
        jest.spyOn(userService, 'createUser').mockImplementation( async () => data);
        jest.spyOn(userService, 'updateUser').mockImplementation( async () => result);

        expect(await userController.updateUser(1, {username: 'gaamze'})).toBe(result);
    });

    it('should delete an user by id', async () => {
        const result={delete: "success"};
        jest.spyOn(userService, 'deleteUser').mockImplementation( async () => result);

        expect(await userController.deleteUser(1)).toBe(result);
    });
});


