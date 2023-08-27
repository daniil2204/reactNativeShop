import { makeRequest } from "./graphqlRequest"

export const changeBucket = async (params) => {
    const {itemId,token,count} = params;
    const bucketItem = `mutation addItemToBucket {
        addItemToBucket(count:${count},itemId:"${itemId}")
      }`
    
    const data = await makeRequest(bucketItem,token);
    return data;
}