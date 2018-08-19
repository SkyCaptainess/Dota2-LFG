export const TOGGLE_HERO_SELECTOR_VISIBILITY = 'TOGGLE_HERO_SELECTOR_VISIBILITY';
export const toggleHeroSelectorVisibility = (visibility) => ({
  type: TOGGLE_HERO_SELECTOR_VISIBILITY,
  visibility
});

export const TOGGLE_LOGIN_MODAL_VISIBILITY = 'TOGGLE_LOGIN_MODAL_VISIBILITY';
export const toggleLoginModalVisibility = (visibility, whereFrom) => ({
  type: TOGGLE_LOGIN_MODAL_VISIBILITY,
  visibility,
  whereFrom
})

export const TOGGLE_HOME = 'TOGGLE_HOME';
export const toggleHome = (onHome) => ({
  type: TOGGLE_HOME,
  onHome
})