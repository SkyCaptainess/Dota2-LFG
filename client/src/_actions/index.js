export const CHANGE_MODE = 'CHANGE_MODE';
export const addGuess = mode => ({
    type: CHANGE_MODE,
    mode
});

export const CHANGE_REGION = 'CHANGE_REGION';
export const changeRegion = region => ({
  type: CHANGE_REGION,
  region
});

export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const changeLocation = location => ({
  type: CHANGE_LOCATION
});

export const CHANGE_MOOD = 'CHANGE_MOOD';
export const changeMood = mood => ({
  type: CHANGE_MOOD
});

export const SET_GAME_OVER = 'SET_GAME_OVER';
export const setGameOver = gameOver => ({
  type: SET_GAME_OVER,
  gameOver
})

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
  type: START_NEW_GAME
});