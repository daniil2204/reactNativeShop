export const checkPayload = (payload) => {
    return !payload.errors ? true : false;
}