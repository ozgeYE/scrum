import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {StoryService} from "./story.service";

@Controller('story')
export class StoryController {
    constructor(private _storyService: StoryService) {

    }

    @Get()
    getAllStories() {
        return this._storyService.getAllStories();
    }

    @Get(':id')
    getStory(@Param('id') id: number) {
        return this._storyService.getStory(id);
    }

    @Post()
    createStory(@Body() user: any) {
        return this._storyService.createStory(user);
    }

    @Put(':id')
    updateStory(@Param('id') id: number, @Body() user: any) {
        return this._storyService.updateStory(id, user);
    }

    @Delete(':id')
    deleteStory(@Param('id') id: number) {
        return this._storyService.deleteStory(id);
    }
}
