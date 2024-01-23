import { UserRepository } from '@/users/domain/repositories/user.repository'
import { UserEntity } from '@/users/domain/entities/user.entity'
import { BadRequestError } from '../../../shared/application/errors/bad-request-error'
import { HashProvider } from '../../../shared/application/providers/hash-provider'
import { UserOutput } from '../dtos/user-output'

export interface SignupUseCaseInput {
  name: string
  email: string
  password: string
}

export type SignupUseCaseOutput = UserOutput

export class SignupUseCase {
  constructor(
    private userRepository: UserRepository,
    private hashProvider: HashProvider,
  ) {}

  async execute(input: SignupUseCaseInput): Promise<SignupUseCaseOutput> {
    const { email, name, password } = input

    if (!email || !name || !password) {
      throw new BadRequestError('Input data not provided')
    }

    await this.userRepository.emailExists(email)

    const hashPassword = await this.hashProvider.generateHash(password)

    const entity = new UserEntity(Object.assign(input, { hashPassword }))

    await this.userRepository.insert(entity)
    return entity.toJSON()
  }
}
