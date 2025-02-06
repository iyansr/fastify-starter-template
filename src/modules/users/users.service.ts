export class UsersService {
  async getUserById(id: string) {
    return {
      id,
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
  }
}

export const usersService = new UsersService();
