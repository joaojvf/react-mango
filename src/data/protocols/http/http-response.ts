export enum HttpStatusCode {
  unathorized = 401,
  badRequest = 400,
  noContent = 204,
  ok = 200
}

export type HttpResponse = {
  statusCode: HttpStatusCode
}