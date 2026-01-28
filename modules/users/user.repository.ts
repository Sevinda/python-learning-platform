import { CreateUserInput } from "./user.dto";
import { User, UserDb } from "./user.model";

export class UserRepository {
  async createUser(data: CreateUserInput): Promise<UserDb> {
    const user = await User.create(data);
    return user.toObject();
  }

  async getAllUsers(): Promise<UserDb[] | null> {
    return User.find().lean().exec();
  }

  async getUserById(id: string): Promise<UserDb | null> {
    return User.findById(id).lean().exec();
  }

  async getUserByUsername(username: string): Promise<UserDb | null> {
    return User.findOne({ username }).lean().exec();
  }
}
