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
      console.log(error)
      return Response.responseServerError(res);
    }
  }
}

export default ModelData;
