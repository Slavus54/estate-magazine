export interface RouteType {
    title: string
    url: string
}

export type SearchedRegion = string | undefined

// APIs

interface Cords {
    lat: number
    long: number
}

export interface TownType {
    title: string
    translation: string
    cords: Cords
}

export interface PropertyType {
    id: number
    title: string
    category: string
    square: number
    region: string
    cost: number
    image: string
}

// Props

export interface PropertyTownsProps {
    towns: TownType[]
}

export interface PropertyPageProps {
    property: PropertyType
}