import { validate as uuidvalidate } from 'uuid'

import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: string | number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = 'cfa3f0b0-d3af-429f-9c87-6e524af32536'
    const entity = new StubEntity(props, id)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidvalidate(entity._id)).toBeTruthy()
  })

  it('Should accept valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = 'cfa3f0b0-d3af-429f-9c87-6e524af32536'
    const entity = new StubEntity(props, id)

    expect(entity._id).not.toBeNull()
    expect(entity._id).toEqual(id)
  })

  it('Should convert a entity to a Javascript Object', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = 'cfa3f0b0-d3af-429f-9c87-6e524af32536'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      ...props,
      id,
    })
  })
})
