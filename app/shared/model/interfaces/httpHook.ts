export interface IHttpHook {
 request: (
  url: string,
  method?: string,
  body?: BodyInit | null | undefined,
  headers?: HeadersInit,
 ) => Promise<any>;
}
