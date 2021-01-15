export declare type LinkType = 'server' | 'bot' | 'template'
type LinkMeta = {
    title: string,
    saying: string,
    description: string,
    color: string,
    image: string,
}
export type Link = {
    id: string,
    owner: string,
    redirect: string,
    domain: string,
    type: LinkType,
    created_at: Date,
    bumped_at: Date,
    unlisted: boolean,
    disabled: boolean,
    meta: LinkMeta
}

export type getLink = {
    success: boolean,
    code: Code,
    payload: Link
}

export type createLink = {
    unlisted?: boolean,
    password?: string,
    meta?: {
        image?: string,
        description?: string,
        title?: string,
        unlisted?: boolean,
    }
}

export type updateLink = {
    type?: LinkType,
    unlisted?: boolean,
    password?: string,
    meta?: {
        image?: string,
        description?: string,
        title?: string,
        unlisted?: boolean,
    }
}

export type User = {
    id: string,
    verified: boolean,
    premium: boolean,
    joined_at: Date,
    blacklisted: boolean
}

export type getUser = {
    success: boolean,
    code: Code,
    payload: User
}

export type getUserLinks = {
    success: boolean,
    code: Code,
    payload: Link[]
}

export type searchLinks = {
    limit?: number,
    type?: LinkType,
    q: string
}

export type searchLinksResult = {
    success: boolean,
    code: Code,
    payload: Link[]
}

export type topLinkResult = {
    success: boolean,
    code: Code,
    payload: Link[]
}

export declare type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

export declare type Code = 'payload_received' | 'rate_limit' | 'invalid_key' | 'not_found' | 'owner_blacklisted' | 'version_deprecated' | 'bad_request' | 'link_taken' | 'link_created' | 'owner_mismatch' | 'link_updated' | 'link_deleted' | 'whitelist_only';

export type APIMessage = {
    success: boolean,
    code: Code,
    message: string
}