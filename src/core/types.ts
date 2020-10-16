import { NextFunction, Request, Response } from 'express';

export type Requester<Params, Response> = (params: Params) => PromiseLike<Response>;
export type Transformer<Response, Result> = (response: Response) => Result;
export type Service<Params, Result> = (params: Params) => PromiseLike<Result>;
export type Controller<Services extends Service<any, any>[]> = (...services: Services) => (request: Request, response: Response, next: NextFunction) => void;
