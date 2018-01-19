export const isObject = (maybeObject) => {
    return typeof maybeObject === 'object' &&
        !Array.isArray(maybeObject) &&
        maybeObject !== null;
}