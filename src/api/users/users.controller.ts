import { UsersService } from "@api/users/users.service"
import { Controller, Get } from "@nestjs/common"

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.findUsers()
  }
}
