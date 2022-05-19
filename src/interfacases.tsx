// interface IName {
//     name: string
// }

interface IPlatforms {
    platform: []
}

export interface ICard {
    background_image: string;
    name: string
    rating: number;
    released: number;
    id: number;
    platforms?: IPlatforms[]
}