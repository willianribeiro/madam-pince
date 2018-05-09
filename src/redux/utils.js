export const createReducer = (initialState, handleActions) => {
  if (typeof initialState === 'undefined') {
    throw new Error('initialState should not be undefined')
  }

  if (Object.prototype.toString.call(handleActions) !== '[object Object]') {
    throw new Error('createReducer expects the second argument as an object representing reducer')
  }

  return (state = initialState, action) =>
    handleActions.hasOwnProperty(action.type)
      ? handleActions[action.type](state, action)
      : state
}

export const shapeById = (arr = []) => {
  const _hasId = item => item.id !== undefined && item.id !== null

  const shaped = arr.reduce((acc, item) => {
      if (!_hasId(item)) {
          throw new Error('Array items should have an "id" attribute')
      }

      acc[item.id] = item
      return acc
  }, {})

  return shaped
}

export const shapeToArray = (obj = {}) => {
  const keys = Object.keys(obj)
  const arr = keys.map(id => obj[id])
  return arr
}

export const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues)
}
