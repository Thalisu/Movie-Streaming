import { Request, Response, NextFunction } from "express";
import logger from "./logger";

const errorHandler = (
  error: Error,
  _request: Request,
  _response: Response,
  next: NextFunction
) => {
  logger.error(error);

  next(error);
};

export default { errorHandler };
