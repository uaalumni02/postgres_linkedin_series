import * as Response from "../helpers/response/response";
import Query from "../database/queries/query";
import validator from "../validator/manufacturer";
import Errors from "../helpers/constants/constants";

class ManufacturerData {
  static async addManufacturerData(req, res) {
    const ManufacturerData = { ...req.body };
    try {
      const { error } = validator.validate(ManufacturerData);
      if (error) {
        return Response.responseBadRequest(res, Errors.VALIDATION);
      }
      const ManufacturerInfo = await Query.addManufacturer(ManufacturerData);
      return Response.responseOkCreated(res, ManufacturerInfo);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
}

export default ManufacturerData;
