import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AlarmsModule } from './alarms/alarms.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_CONNECT),
    AuthModule,
    UsersModule,
    AlarmsModule,
    ProfileModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
