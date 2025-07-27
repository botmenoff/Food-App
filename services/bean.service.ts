import Bean from "@/models/Bean.model";

const baseUrl = "https://jellybellywikiapi.onrender.com/api/Beans"

export async function getBeans(page: number): Promise<Bean[]> {
    try {
        const response  = await fetch(baseUrl + "?pageIndex=" + page)
        const data = await response.json();
        
        const beanArray: Bean[] = data.items      
        return beanArray;
    } catch (error) {
        console.log("Error" + error);
        return []
    }
}

export async function getOneBean(id: number) {
    try {
        const response  = await fetch(baseUrl + "/" + id)
        const data = await response.json();
        // Transformar el tipo de dato
        const bean: Bean = data
        return bean;
    } catch (error) {
        console.log("Error" + error);
    }
}