import req from '@helperdiscord/centra';
import {Link, getLink, createLink, updateLink, User, getUser, getUserLinks, searchLinks, searchLinksResult, topLinkResult, LinkType, HTTPMethod, APIMessage} from './types';

export class Client {
  /**
     * Creates an instance of Client.
     * @param {string} token
     * @memberof Client
     */
  constructor(private token: string) { }

  /**
     *
     *
     * @param {string} slug
     * @return {*}  {(Promise<Link | Error>)}
     * @memberof Client
     */
  public async getLink(slug: string): Promise<Link | Error> {
    const res: getLink = await this.request('GET', `/link/${slug}`);
    if (!res.success) {
      throw new Error(res.code);
    } else {
      return res.payload;
    }
  }

  /**
     *
     *
     * @param {string} slug
     * @param {createLink} link
     * @return {*}  {(Promise<APIMessage | Error>)}
     * @memberof Client
     */
  public async createLink(slug: string, link: createLink): Promise<APIMessage | Error> {
    const res: APIMessage = await this.request('POST', `/link/${slug}`, link);
    if (!res.success) {
      throw new Error(res.message);
    } else {
      return res;
    }
  }

  /**
     *
     *
     * @param {string} slug
     * @param {updateLink} link
     * @return {*}  {(Promise<APIMessage | Error>)}
     * @memberof Client
     */
  public async updateLink(slug: string, link: updateLink): Promise<APIMessage | Error> {
    const res: APIMessage = await this.request('PATCH', `/link/${slug}`, link);
    if (!res.success) {
      throw new Error(res.message);
    } else {
      return res;
    }
  }

  /**
     *
     *
     * @param {string} slug
     * @return {*}  {(Promise<APIMessage | Error>)}
     * @memberof Client
     */
  public async deleteLink(slug: string): Promise<APIMessage | Error> {
    const res: APIMessage = await this.request('DELETE', `/link/${slug}`);
    if (!res.success) {
      throw new Error(res.message);
    } else {
      return res;
    }
  }

  /**
     *
     *
     * @param {string} id
     * @return {*}  {(Promise<User | Error>)}
     * @memberof Client
     */
  public async getUser(id: string): Promise<User | Error> {
    const res: getUser = await this.request('GET', `/user/${id}`);
    if (!res.success) {
      throw new Error(res.code);
    } else {
      return res.payload;
    }
  }

  /**
     *
     *
     * @param {string} id
     * @return {*}  {(Promise<Link[] | Error>)}
     * @memberof Client
     */
  public async getUserLinks(id: string): Promise<Link[] | Error> {
    const res: getUserLinks = await this.request('GET', `/user/${id}/links`);
    if (!res.success) {
      throw new Error(res.code);
    } else {
      return res.payload;
    }
  }

  /**
     *
     *
     * @param {string} query
     * @param {{ type?: LinkType, limit?: number }} [options]
     * @return {*}  {(Promise<Link[] | Error>)}
     * @memberof Client
     */
  public async searchLinks(query: string, options?: { type?: LinkType, limit?: number }): Promise<Link[] | Error> {
    const search: searchLinks = {q: query, ...options};
    const res: searchLinksResult = await this.request('GET', '/search', {}, search);
    if (!res.success) {
      throw new Error(res.code);
    } else {
      return res.payload;
    }
  }

  /**
     *
     *
     * @param {LinkType} type
     * @return {*}  {(Promise<Link[] | Error>)}
     * @memberof Client
     */
  public async getTopLinks(type: LinkType): Promise<Link[] | Error> {
    const res: topLinkResult = await this.request('GET', '/top', {}, {type: type});
    if (!res.success) {
      throw new Error(res.code);
    } else {
      return res.payload;
    }
  }

  /**
     *
     *
     * @private
     * @param {HTTPMethod} method
     * @param {string} path
     * @param {*} [params={}]
     * @param {*} [query={}]
     * @return {*}  {Promise<any>}
     * @memberof Client
     */
  private async request(method: HTTPMethod, path: string, params: any = {}, query: any = {}): Promise<any> {
    const init = req(`https://api.dsc.gg/v2`, method).path(path).header('Authorization', this.token).body(params);
    for (const [k, v] of Object.entries(query)) {
      init.query(k, v);
    }
    const res = await init.send();
    return res.json();
  }
}
