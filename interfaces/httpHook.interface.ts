export interface IHttpHook {
 request: (
  url: string,
  method?: string,
  body?: BodyInit | null | undefined,
  headers?: {
   'Content-Type': string;
  },
 ) => Promise<any>;
}
