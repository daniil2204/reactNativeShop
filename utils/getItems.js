import { makeRequest } from "./graphqlRequest"

export const getItems = async (offset,limit) => {
    const items = `query getItems {
        getItems(limit:${limit},offset:${offset}){
            id
            title
            price
            imageUrl
        }
    }`
    const data = await makeRequest(items);
    return data;
}