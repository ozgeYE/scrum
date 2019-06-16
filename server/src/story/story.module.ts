import {Module} from '@nestjs/common';
import {StoryController} from './story.controller';
import {StoryService} from './story.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {StoryEntity} from "./story.entity";

@Module({
    imports: [TypeOrmModule.forFeature([StoryEntity])],
    controllers: [StoryController],
    providers: [StoryService]
})
export class StoryModule {
}
