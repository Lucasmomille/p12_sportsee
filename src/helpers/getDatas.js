import { userMainData, userActivityData, userAverageSessionData, userPerformanceData } from '../data/mockData'

export function getMockData(dataType) {
    switch (dataType) {
        case 'MainData':
          return userMainData
        case 'Activity':
          return userActivityData
        case 'AverageSession':
          return userAverageSessionData
        case 'Performance':
          return userPerformanceData
        case '':
          console.error("Empty 'dataType' argument")
          break
        default:
          console.error("Wrong 'dataType' argument")
    }
}