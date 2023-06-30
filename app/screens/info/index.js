import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'
import { data } from '../../constants/data'
import styles from './styles'
const Info = () => {
  const dispatch = useDispatch()
  const [dateWiseData, setDateWiseData] = useState()
  const userData = useSelector(state => state.user)

  useEffect(() => {
    dispatch(actions.storeData(data))
  }, [])

  useEffect(() => {
    const groupByDate = userData.data.reduce((acc, curr) => {
      const date = curr.Date
      if (!acc[date]) {
        acc[date] = [curr]
      } else {
        acc[date].push(curr)
      }
      return acc
    }, {})
   
    const array = Object.keys(groupByDate).map((item) => {
      return {
        date: item,
        users: groupByDate[item]
      }
    })

    setDateWiseData(array)
  }, [userData?.data])
  
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={dateWiseData}
        bounces={false}
        renderItem={({ item, index }) => {
          console.log("item", item.users)
          return (
            <View>
              <Text style={styles.text}>======{item.date}=====</Text>
              <FlatList
                data={item.users}
                bounces={false}
                renderItem={({ item }) => {
                  return (
                    <Text style={styles.username}>{item?.Name}</Text>
                  )
                }}
              />
            </View>
          )
        }}
      />
    </View>
  )
}

export default Info