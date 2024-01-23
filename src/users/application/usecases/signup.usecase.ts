import { UserRepository } from '@/users/domain/repositories/user.repository'
import { UserEntity } from '@/users/domain/entities/user.entity'
import { BadRequestError } from '../errors/bad-request-error'

export interface SignupUseCaseInput {
  name: string
  email: string
  password: string
}

export interface SignupUseCaseOutput {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
}

export class SignupUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(input: SignupUseCaseInput): Promise<SignupUseCaseOutput> {
    const { email, name, password } = input

    if (!email || !name || !password) {
      throw new BadRequestError('Input data not provided')
    }

    await this.userRepository.emailExists(email)

    const entity = new UserEntity(input)

    await this.userRepository.insert(entity)
    return entity.toJSON()
  }
}
