
/**
 * @class
 * @classdesc Class to get user's performance
 */
 export class UserPerformance {
    /**
     * Create a user activity data
     * @param { Number } data.id user id
     * @param { Array.<Object> } data.kind user performance's kind
     * @param { Array.<Object> } data.data user's data performance
     */
    constructor(data) {
      this.id = data.id
      this.userKindPerformance = data.kind
      this.userDataPerformance = data.data
    }
  
    /**
     * Get the user performance for chart
     * @return { Array.<{ value: Number, kind: String }> }
     */
     getPerformance() {
        const performances = [...this.userDataPerformance]

        return performances.map((item) => {
          return {
            ...item,
            kind: this.userKindPerformance[item.kind],
          }
        })
    }
  }