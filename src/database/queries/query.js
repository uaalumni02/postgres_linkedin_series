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
  static async getModels() {
    try {
      const getAllModels = await db.select().from("model").orderBy("id");
      return getAllModels;
    } catch (error) {
      throw error;
    }
  }
  static async modelById(id) {
    try {
      const modelById = await db("model").where({ id }).select();
      return modelById;
    } catch (error) {
      throw error;
    }
  }
  static async deleteModel(id) {
    try {
      const modelToDelete = await db("model").where({ id }).del();
      return modelToDelete;
    } catch (error) {
      throw error;
    }
  }
  static async updateModel(id, modelData) {
    try {
      const modelToUpdate = await db("model")
        .where({ id })
        .update(modelData)
        .returning("*");
      return modelToUpdate;
    } catch (error) {
      throw error;
    }
  }
  static async addManufacturer(data) {
    try {
      const manufacturerInfo = await db
        .insert(data)
        .returning("*")
        .into("manufacturer");
      return manufacturerInfo;
    } catch (error) {
      throw error;
    }
  }
}

export default Query;
