export type Trait = "attack" | "health" | "speed"

interface NftAttribute {
    trait_type: Trait
    value: string
}

export default interface NftMeta {
    description: string
    image: string
    name: string
    attributes: NftAttribute[]
}
export type NftCore = {
    tokenId: number;
    price: number;
    creator: string;
    isListed: boolean
}

export type Nft = {
    meta: NftMeta
} & NftCore
