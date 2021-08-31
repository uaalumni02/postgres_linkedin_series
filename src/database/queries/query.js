import db from "../knex";

class Query {
  static async addCarModel(data) {
    try {
      const modelInfo = await db.insert(data).returning("*").into("model");
      return modelInfo;
    } catch (error) {
      throw error;
    }
  }
}
export default Query;