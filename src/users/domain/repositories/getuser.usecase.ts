import { UserRepository } from '@/users/domain/repositories/user.repository'
import { UserOutput } from '../../application/dtos/user-output'

export type GetUserUseCaseInput = {
  id: string
}

export type Output = UserOutput

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(input: GetUserUseCaseInput): Promise<Output> {
    const entity = await this.userRepository.findById(input.id)
    return entity.toJSON()
  }
}
