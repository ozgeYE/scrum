import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {StoryEntity} from "./story.entity";

@Injectable()
export class StoryService {
    constructor(
        @InjectRepository(StoryEntity)
        private readonly _storyRepository: Repository<StoryEntity>,
    ) {
    }

    async getAllStories() {
        return await this._storyRepository.find();
    }

    async getStory(id: number) {
        console.log(id);
        return this._storyRepository.findOne({where: {id}});
    }

    async createStory(story: any) {
        const storyData = await this._storyRepository.create(story);
        await this._storyRepository.save(storyData);
        return storyData;
    }

    async updateStory(id: number, story: any) {
        const storyData = await this._storyRepository.findOne({where: {id}});
        if (!storyData) {
            // TODO: implement error
        }

        await this._storyRepository.update(id, story);
        return await this._storyRepository.findOne({where: {id}});
    }

    async deleteStory(id: number) {
        const story = await this._storyRepository.findOne({where: {id}});
        if (!story) {
            // TODO: implement error
        }
        await this._storyRepository.delete({id});
        return {delete: "success"}
    }
}
