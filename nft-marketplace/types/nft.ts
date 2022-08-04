export type Trait = "attack" | "health" | "speed"

interface NftAttribute {
    trait_type: Trait
    value: string
}

export interface NftMeta {
    description: string
    image: string
    name: string
    attributes: NftAttribute[]
}

export type NftCore = {
    tokenId: number
    price: number
    creator: string
    isListed: boolean
}

export type Nft = {
    meta: NftMeta
} & NftCore

export type FileReq = {
    bytes: Uint8Array;
    contentType: string;
    fileName: string;
}

export type PinataRes = {
    IpfsHash: string;
    PinSize: number;
    Timestamp: string;
    isDuplicate: boolean;
}
