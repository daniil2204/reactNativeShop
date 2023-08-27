export const isError = (data) => {
    return "errors" in data ? true : false;
}