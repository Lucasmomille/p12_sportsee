
import energy from '../assets/icons/energy.svg'
import protein from '../assets/icons/protein.svg'
import carbohydrate from '../assets/icons/carbohydrate.svg'
import lipid from '../assets/icons/lipid.svg'

/**
 * @class
 * @classdesc This is a class to get general informations from user
 */
export class UserInfos {
  /**
   * Create a UserInfos.
   * @param { Number } data.id user id
   * @param { Object } data.userInfos user information
   * @param { Number } data.todayScore user's daily score
   * @param { Object } data.keyData nutrient information
   */
  constructor(data) {
    this.id = data.id
    this.userInfos = data.userInfos
    this.todayScore = data.todayScore
    this.keyData = data.keyData
  }

  /**
   * Get the user first name.
   * @return { String } User's first name
   */
  getFirstName() {
    return this.userInfos.firstName
  }

  /**
   * Get the user score in percentage's shape with dataScore the chart
   * @return { Array.<{ name: String, percent: Number, fill: String }>  } User's daily score
   */
  getScore() {
    const percentage = this.todayScore * 100

    const dataScore = [
      {
        name: 'falseScore',
        percent: 100,
        fill: '#f8f7f7',
      },
      {
        name: 'score',
        percent: percentage,
        fill: '#FF0000',
      },
    ]

    return dataScore
  }

  /**
   * Get the user score in percentage.
   * @return { Number } User's daily score
   */
  getScorePercentage() {
    return this.todayScore * 100
  }

  /**
   * Get all infos to generate nutrient cards.
   * @return { Array.<{ name: String, src: String, alt: String, key: String, unit: String }> } Nutrients infos
   */
  getNutrientInfos() {
    const nutrientInfos = [
      {
        name: 'calories',
        src: energy,
        alt: 'energy',
        key: 'calorieCount',
        unit: 'kCal',
      },
      {
        name: 'proteines',
        src: protein,
        alt: 'chicken',
        key: 'proteinCount',
        unit: 'g',
      },
      {
        name: 'glucides',
        src: carbohydrate,
        alt: 'apple',
        key: 'carbohydrateCount',
        unit: 'g',
      },
      {
        name: 'lipides',
        src: lipid,
        alt: 'cheeseburger',
        key: 'lipidCount',
        unit: 'g',
      },
    ]

    return nutrientInfos
  }
}