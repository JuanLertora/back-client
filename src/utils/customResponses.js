const HTTP_STATUS = {
  STATUS_200: { code: 200, message: "Operación realizada con éxito" },
  STATUS_201: { code: 201, message: "Alta realizada con éxito" },
  STATUS_400: { code: 400, message: "Error en el FrontEnd" },
  STATUS_500: {
    code: 500,
    message: "Error interno del servidor - contacte a su administrador",
  },
};

export class customResponses {
  static successResponse(res, data) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(HTTP_STATUS.STATUS_200.code)
      .json({ message: HTTP_STATUS.STATUS_200.message, data });
  }

  static successResponseUser(res, data) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(HTTP_STATUS.STATUS_201.code)
      .json({ message: HTTP_STATUS.STATUS_201.message, data });
  }

  static errorClientResponse(res, error) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(HTTP_STATUS.STATUS_400.code)
      .json({ message: HTTP_STATUS.STATUS_400.message, error });
  }

  static errorServerResponse(res, error) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(HTTP_STATUS.STATUS_500.code)
      .json({ message: HTTP_STATUS.STATUS_500.message, error });
  }
}
