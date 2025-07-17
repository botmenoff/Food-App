import Bean from "@/models/Bean.model";
import BeanBackend from "@/models/BeanBackend.model";

const baseUrl = "https://jellybellywikiapi.onrender.com/api/Beans"

export function GET(request: Request) {
    return Response.json({ data: "Buenas" });
    // Obtener data de la api de las lentejas
    // try {
    //     const data = fetch("https://jellybellywikiapi.onrender.com/api/Beans")
    //     return Response.json({ data: data });
    // } catch (error) {
    //     return Response.json({ error: "Something went wrong" + error });
    // }
}

export default async function getBeans(page: number): Promise<Bean[]> {
    try {
        const response  = await fetch(baseUrl + "?pageIndex=" + page)
        const data = await response.json();
        // Transformar el tipo de dato
        const beanArray: Bean[] = await data.items.map((bean: BeanBackend) => ({
            beanId: bean.beanId,
            groupName: bean.groupName,
            ingredients: bean.ingredients,
            flavourName: bean.flavorName,
            imageUrl: bean.imageUrl,
            glutenFree: bean.glutenFree,
            sugarFree: bean.sugarFree
        }))        
        return beanArray;
    } catch (error) {
        console.log("Error" + error);
        return []
    }
}