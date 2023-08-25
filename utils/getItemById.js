import { makeRequest } from "./graphqlRequest"

export const getItemById = async (id,getReviews) => {
    const items = `query getItemById {
        getItemById(id:"${id}"){
            ${getReviews ? 'reviews { username text }' : 'title price imageUrl'}
        }
    }`
    const data = await makeRequest(items);
    return data.data.getItemById;
}