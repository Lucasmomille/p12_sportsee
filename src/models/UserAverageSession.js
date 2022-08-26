
/**
 * @class
 * @classdesc Class to get user's average session length
 */
 export class UserAverageSession {
    /**
     * Create a user activity data.
     * @param { Number } data.id user id
     * @param { Array.<Object> } data.sessions user performance's kind
     */
    constructor(data) {
      this.id = data.id
      this.userSessions= data.sessions
    }
  
    /**
     * Get the user's session length for chart
     * @return { Array.<{ day: String, sessionLength: Number }> }
     */
     getAverageSessions() {
        const days = {
          1: 'L',
          2: 'M',
          3: 'M',
          4: 'J',
          5: 'V',
          6: 'S',
          7: 'D',
        }
    
        const sessions = [...this.userSessions]

        return sessions.map((i) => {
          return {
            ...i,
            day: days[i.day],
          }
        })
    }
  }