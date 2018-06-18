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
})

