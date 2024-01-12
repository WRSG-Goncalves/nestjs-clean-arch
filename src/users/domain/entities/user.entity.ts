import { UserProps } from './interface/UserProps'

export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date()
    this.props.updateAt = new Date()
  }
}
