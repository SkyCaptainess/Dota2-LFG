export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (field, value) => ({
    type: CHANGE_FIELD,
    field,
    value
});

export const SET_HEROES = 'SET_HEROES'
export const setHeroes = heroes => ({
  type: SET_HEROES,
  heroes
})

export const SELECT_SLOT = 'SELECT_SLOT'
export const selectSlot = slot => ({
  type: SELECT_SLOT,
  slot
})




