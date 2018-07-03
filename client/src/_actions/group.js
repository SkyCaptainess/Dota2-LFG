export const CREATE_GROUP = 'CREATE_GROUP'
export const createGroup = group => ({
  type: CREATE_GROUP,
  group
})

export const ADD_ALL_GROUPS = 'ADD_ALL_GROUPS'
export const addAllGroups = groups => ({
  type: ADD_ALL_GROUPS,
  groups
})

export const UPDATE_GROUP = 'UPDATE_GROUP'
export const updateGroup = group => ({
  type: UPDATE_GROUP,
  group
})

export const SET_CREATED_GROUP = 'SET_CREATED_GROUP';
export const setCreatedGroup = createdGroup => ({
  type: SET_CREATED_GROUP,
  createdGroup
})