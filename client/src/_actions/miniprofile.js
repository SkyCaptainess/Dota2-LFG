export const CHANGE_FIELD = 'UPDATE_PROFILE';
export const changeField = (field, value) => ({
    type: CHANGE_FIELD,
    field,
    value
});

