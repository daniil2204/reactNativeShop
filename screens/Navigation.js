import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import AuthPage from "./AuthPage";
import UserPage from "./UserPage";
import BucketPage from "./BucketPage";
import ItemPage from "./ItemPage";
import Layout from "../components/Layout";
import DesirePage from "./DesirePage";
import ItemsByCategoryPage from "./ItemsByCategoryPage";

const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Layout>
                <Stack.Navigator initialRouteName="Desire">
                    <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false,animation:"fade" }}/>
                    <Stack.Screen name="Search" component={SearchPage} options={{ headerShown: false,animation:"fade" }}/>
                    <Stack.Screen name="Auth" component={AuthPage} options={{ headerShown: false,animation:"fade" }}/>
                    <Stack.Screen name="User" component={UserPage} options={{ headerShown: false,animation:"fade" }}/>
                    <Stack.Screen name="Bucket" component={BucketPage} options={{ headerShown: false,animation:"fade" }}/>
                    <Stack.Screen name="Item" component={ItemPage} options={{ headerShown: false,animation:"fade" }}/>
                    <Stack.Screen name="ItemsByCategory" component={ItemsByCategoryPage} options={{ headerShown: false,animation:"fade" }}/>
                    <Stack.Screen name="Desire" component={DesirePage} options={{ headerShown: false,animation:"fade" }}/>
                </Stack.Navigator>
            </Layout>
        </NavigationContainer>
    )
}

export default Navigation