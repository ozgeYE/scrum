import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './user/user.module';
import {StoryModule} from './story/story.module';
import {PointModule} from './point/point.module';

@Module({
    imports: [TypeOrmModule.forRoot(), UserModule, StoryModule, PointModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
