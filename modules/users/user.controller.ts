import { connectMongo } from "@/lib/db/mongo";
import { CreateUserInput } from "./user.dto";
import { UserService } from "./user.service";

export class UserController {
  constructor(private service = new UserService()) {}

  async createUser(reqBody: CreateUserInput) {
    await connectMongo();
    return this.service.createUser(reqBody);
  }

  async getUserById(userId: string) {
    await connectMongo();
    return this.service.getUserById(userId);
  }

  async getUserByUsername(username: string) {
    await connectMongo();
    return this.service.getUserByUsername(username);
  }
}
