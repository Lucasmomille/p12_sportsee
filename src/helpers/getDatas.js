import { userMainData, userActivityData, userAverageSessionData, userPerformanceData } from '../data/mockData'

export function getMockData(data) {
    switch (data) {
        case 'MainData':
          return userMainData
        case 'Activity':
          return userActivityData
        case 'AverageSession':
          return userAverageSessionData
        case 'Performance':
          return userPerformanceData
        case '':
          console.error("Empty argument")
          break
        default:
          console.error("Wrong argument")
    }
}