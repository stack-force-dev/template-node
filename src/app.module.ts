import { UsersModule } from "@api/users/users.module"
import DB from "@db/connect"
import { Module } from "@nestjs/common"

import { AppController } from "./app.controller"
import { AppService } from "./app.service"

@Module({
  imports: [DB, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
