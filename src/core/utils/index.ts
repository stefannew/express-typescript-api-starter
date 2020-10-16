import { Requester, Transformer } from '../types';

export const createService = <Params, Response, Result>(requester: Requester<Params, Response>, transformer: Transformer<Response, Result>) => (params: Params) => requester(params).then(transformer);
