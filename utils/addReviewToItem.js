import { makeRequest } from "./graphqlRequest"

export const addReviewToItem = async (params) => {
    const {itemId,value,token} = params;
    const reviewItem = `mutation addReviewToItem{
        addReviewToItem(text:"${value}",id:"${itemId}")
    }`
    
    const data = await makeRequest(reviewItem,token);
    return data;
}