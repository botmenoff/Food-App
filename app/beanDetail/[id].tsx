import BeanDetailComponent from "@/components/BeanDetail.component";
import Bean from "@/models/Bean.model";
import { getOneBean } from "@/services/bean.service";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function BeanDetailPage() {
    const { id } = useLocalSearchParams();
    const [fetchedBean, setFetchedBean] = React.useState<Bean>();
    //parse id to number
    const beanId = Number(id);
    useEffect(() => {
        if (isNaN(beanId)) {
            console.error("Invalid bean ID:", id);
            return;
        }
        getBean();
    }, [])

    async function getBean() {
        const bean = await getOneBean(beanId)
        if (bean) {
            setFetchedBean(bean);
        } else {
            console.error("Bean not found for ID:", beanId);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            {fetchedBean && (
                <BeanDetailComponent beanInfo={fetchedBean}></BeanDetailComponent>
            )}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    beanText: {
        fontSize: 20,
        color: "#EA4757"
    },
    container: {
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "#2D261F",
        height: "100%"
    },
});