import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number

  @Column()
  email: string

  @Column({ unique: true })
  name: string

  @Column()
  password: string

  @Column()
  created_at: Date

  @Column()
  updated_at: Date
}
