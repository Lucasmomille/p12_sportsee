
/**
 * @class
 * @classdesc This is a class to get activity sessions's user
 */
export class UserActivity {
  /**
   * Create a UserInfos.
   * @param { Number } data.id user id
   * @param { Array.<Object> } data.sessions user daily activity
   */
  constructor(data) {
    this.id = data.id
    this.userSessions = data.userInfos
  }

  
}