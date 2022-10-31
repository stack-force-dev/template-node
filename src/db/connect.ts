import { User } from "@db/entities/User"
import { TypeOrmModule } from "@nestjs/typeorm"

import { config } from "@root/config"

export default TypeOrmModule.forRoot({
  type: "postgres",
  host: config.psqlHost,
  port: 5432,
  database: config.psqlDatabase,
  username: config.psqlUsername,
  password: config.psqlPassword,
  entities: [User],
  subscribers: [],
  migrations: [],
  synchronize: true
})
