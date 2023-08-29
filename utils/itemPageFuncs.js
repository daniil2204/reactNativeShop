import { getItemById } from "./getItemById";
import { isError } from "./isError";

export const fetchItemById = async (itemId) => {
    const data = await getItemById(itemId)
    if (isError(data)) {}
    return data;
}

export const fetchReviewsById = async (itemId) => {
    const data = await getItemById(itemId,true)
    if (isError(data)) {}
    return data;
}
