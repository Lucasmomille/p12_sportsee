
/**
 * @class
 * @classdesc This is a class to get activity sessions's user
 */
export class UserActivity {
  /**
   * Create a user activity data.
   * @param { Number } data.id user id
   * @param { Array.<Object> } data.sessions user daily activity
   */
  constructor(data) {
    this.id = data.id
    this.userSessions = data.sessions
  }

  /**
   * Get the user session formatted for the chart.
   * @return { Array.<{ calories: Number, day: String, kilogram: Number }> } User sessions data for each day
   */
   getSessions() {
    const sessions = [...this.userSessions]

	const sortSessions = sessions.sort(function (a, b) {
		return new Date(b.day) - new Date(a.day)
	})

	const lastSessions = sortSessions.slice(0, 10)

	// Reorder sessions in ascending order for xAxis
	const reOrderlastSessions = lastSessions.sort(function(a, b) {
		return new Date(a.day) - new Date(b.day)
	})
    return reOrderlastSessions.map((session) => {
      return {
        ...session,
        // get only the day for chart lisibility
        day: session.day.slice(-2),
      }
    })
  }
}