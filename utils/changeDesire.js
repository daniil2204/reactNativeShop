import { makeRequest } from "./graphqlRequest"

export const changeDesire = async (params) => {
    const {itemId,token} = params;
    const desireItem = `mutation changeDesireList {
        changeDesireList(itemId:"${itemId}")
    }`
    
    const data = await makeRequest(desireItem,token);
    return data;
}