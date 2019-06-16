import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private _userService: UserService) {

    }

    @Get()
    getAllUsers() {
        return this._userService.getAllUsers();
    }

    @Get(':id')
    getUser(@Param('id') id: number) {
        return this._userService.getUser(id);
    }

    @Post()
    createUser(@Body() user: any) {
        return this._userService.createUser(user);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() user: any) {
        return this._userService.updateUser(id, user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this._userService.deleteUser(id);
    }
}
