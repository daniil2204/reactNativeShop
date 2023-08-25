import { makeRequest } from "./graphqlRequest"

export const getItemsByCategory = async (category) => {
    const items = `query getItemsByCategory {
        getItemsByCategory(category:"${category}"){
            id title price imageUrl
        }
    }`
    const data = await makeRequest(items);
    return data.data.getItemsByCategory;
}