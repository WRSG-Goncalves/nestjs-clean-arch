import { Entity } from '../../../shared/domain/entities/entity'
import { UserProps } from './interface/UserProps'

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
    this.props.updatedAt = new Date()
  }

  update(value: string): void {
    this.name = value
  }

  updatePassword(value: string): void {
    this.password = value
  }

  get name() {
    return this.props.name
  }

  private set name(value: string) {
    this.props.name = value
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  private set password(value: string) {
    this.props.password = value
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updateAt() {
    return this.props.updatedAt
  }
}
