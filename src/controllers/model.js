import * as Response from "../helpers/response/response";
import Query from "../database/queries/query";

class ModelData {
  static async addModelData(req, res) {
    const modelData = { ...req.body };
    console.log(modelData)
    try {
      const modelInfo = await Query.addCarModel(modelData);
      return Response.responseOkCreated(res, modelInfo );
    } catch (error) {
      return Response.responseServerError(res);
    }
  }

}

export default ModelData;