import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './config/.env',
      isGlobal: true,
    }),
    TaskModule,
    DatabaseModule,
  ],
})
export class AppModule {}
