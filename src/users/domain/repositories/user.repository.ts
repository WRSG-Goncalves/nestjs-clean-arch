import { UserEntity } from '../entities/user.entity'
import {
  SearchParams as DefaultSearchParams,
  SearchResult as DefaultSearchResult,
  SearchableRepositoryInterface,
} from '@/shared/domain/repositories/searchable-repository-contracts'

export type UserRepositoryFilter = string

export class UserRepositorySearchParams extends DefaultSearchParams<UserRepositoryFilter> {}

export class UserRepositorySearchResult extends DefaultSearchResult<
  UserEntity,
  UserRepositoryFilter
> {}

export interface UserRepository
  extends SearchableRepositoryInterface<
    UserEntity,
    UserRepositoryFilter,
    UserRepositorySearchParams,
    UserRepositorySearchResult
  > {
  findByEmail(email: string): Promise<UserEntity>
  emailExists(email: string): Promise<void>
}
