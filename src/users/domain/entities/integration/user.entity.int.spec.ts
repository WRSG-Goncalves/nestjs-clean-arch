import { EntityValidationError } from '../../../../shared/domain/errors/validation-error'
import { UserDataBuilder } from '../__tests__/testing/helpers/user-data-builder'
import { UserProps } from '../interface/UserProps'
import { UserEntity } from '../user.entity'

describe('UserEntity integration tests', () => {
  describe('Constructor method', () => {
    it('should throw an erro when creating a new user with invalid name', () => {
      let props: UserProps = { ...UserDataBuilder({}), name: null }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = { ...UserDataBuilder({}), name: '' }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = { ...UserDataBuilder({}), name: 'a'.repeat(256) }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)
    })
  })
})
