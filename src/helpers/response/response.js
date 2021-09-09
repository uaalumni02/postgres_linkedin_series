const responseOkCreated = (res, modeldata) => {
  return res.status(201).json({
    success: true,
    message: "model successfully added",
    modeldata,
  });
};

const responseServerError = (res) => {
  return res.status(500).json({
    success: false,
    message: "internal server error",
  });
};
const responseBadRequest = (res, message) => {
  return res.status(400).json({
    success: false,
    message,
  });
};
const responseOk = (res, data) => {
  return res.status(200).json({
    success: true,
    data,
  });
};

export {
  responseOkCreated,
  responseServerError,
  responseBadRequest,
  responseOk,
};
