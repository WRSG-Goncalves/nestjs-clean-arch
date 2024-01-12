import { faker } from '@faker-js/faker'
import { UserEntity } from '../../user.entity'
import { UserProps } from '../../interface/UserProps'

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity
  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
    sut = new UserEntity(props)
  })

  it('Construtor method', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
    expect(sut.props.updateAt).toBeInstanceOf(Date)
  })
})
