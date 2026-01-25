import { NotFoundError, ValidationError } from "@/lib/http/errors";
import { CreateUserInput } from "./user.dto";
import { UserDb } from "./user.model";
import { UserRepository } from "./user.repository";

type UserResponse = {
  id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
};

function toUserResponse(user: UserDb): UserResponse {
  return {
    id: user._id.toString(),
    username: user.username,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

export class UserService {
  constructor(private repo = new UserRepository()) {}

  async createUser(data: CreateUserInput): Promise<UserResponse> {
    const exists = await this.repo.getUserByUsername(data.username);
    if (exists) throw new ValidationError("Username already in use");
    const user = await this.repo.createUser(data);
    return toUserResponse(user);
  }

  async getUserById(id: string): Promise<UserResponse | null> {
    const user = await this.repo.getUserById(id);
    if (!user) throw new NotFoundError("User not found");
    return toUserResponse(user);
  }

  async getUserByUsername(username: string): Promise<UserResponse | null> {
    const user = await this.repo.getUserByUsername(username);
    if (!user) throw new NotFoundError("User not found");
    return toUserResponse(user);
  }
}
