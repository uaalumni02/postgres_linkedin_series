import * as Response from "../helpers/response/response";
import Query from "../database/queries/query";
import validator from "../validator/model";
import Errors from "../helpers/constants/constants";

class ModelData {
  static async addModelData(req, res) {
    const modelData = { ...req.body };
    try {
      const { error } = validator.validate(modelData);
      if (error) {
        return Response.responseBadRequest(res, Errors.VALIDATION);
      }
      const modelInfo = await Query.addCarModel(modelData);
      return Response.responseOkCreated(res, modelInfo);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async getAllModels(req, res) {
    try {
      const getAllModels = await Query.getModels(req);
      return Response.responseOk(res, getAllModels);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async getModelById(req, res) {
    const { id } = req.params;
    try {
      const modelById = await Query.modelById(id);
      if (modelById.length == 0) {
        Response.responseNotFound(res, Errors.INVALID_MODEL);
      }
      Response.responseOk(res, modelById);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async deleteModel(req, res) {
    const { id } = req.params;
    try {
      const modelToDelete = await Query.deleteModel(id);
      if (!modelToDelete) {
        Response.responseNotFound(res, Errors.INVALID_MODEL);
      } else {
        Response.responseOk(res, modelToDelete);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async updateModel(req, res) {
    const { id } = req.params;
    const modelData = { ...req.body };
    try {
      const modelToUpdate = await Query.updateModel(id, modelData);
      return modelToUpdate.length == 0
        ? Response.responseNotFound(res, Errors.INVALID_MODEL)
        : Response.responseOk(res, modelToUpdate);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
}

export default ModelData;
