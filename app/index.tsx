import BeanCard from '@/components/BeanCard.component';
import Loader from '@/components/Loader.component';
import SwichPage from '@/components/SwichPage.component';
import { getBeans } from '@/services/bean.service';
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import Bean from "../models/Bean.model";

const { width } = Dimensions.get("window");
export default function Index() {
  const [beans, setBeans] = useState<Bean[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  function handlePageChange(newPage: number) {
    if (newPage >= 1) {
      setPage(newPage)
    }
  }
  useEffect(() => {
    setLoading(true)
    fetchBeans()
    setLoading(false)
  }, [page])

  async function fetchBeans() {
    const benArray = await getBeans(page)
    setBeans(benArray)
  }
  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      {beans.map(function (x) {
         return  <BeanCard beanInfo={x} key={x.beanId}></BeanCard>
      })}
      <Loader showLoader={loading}></Loader>
      <SwichPage page={page} onPageClick={handlePageChange}></SwichPage>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#2D261F",
  },
  image: {
    width: width * 0.9,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 12,
  },

});