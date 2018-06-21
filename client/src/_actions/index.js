export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (field, value) => ({
    type: CHANGE_FIELD,
    field,
    value
});

export const TOGGLE_HERO_SELECTOR_VISIBILITY = 'TOGGLE_HERO_SELECTOR_VISIBILITY';
export const toggleHeroSelectorVisibility = (visibility) => ({
  type: TOGGLE_HERO_SELECTOR_VISIBILITY,
  visibility
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

export const CREATE_GROUP = 'CREATE_GROUP'
export const createGroup = group => ({
  type: CREATE_GROUP,
  group
})

