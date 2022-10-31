import { UsersController } from "@api/users/users.controller"
import { UsersService } from "@api/users/users.service"
import { User } from "@db/entities/User"
import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
