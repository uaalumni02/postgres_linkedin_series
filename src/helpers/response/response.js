  
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

  
 
  
  export {
    responseOkCreated,
    responseServerError,
  };
  