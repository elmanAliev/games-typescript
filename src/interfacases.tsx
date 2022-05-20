// interface IName {
//     name: string
// }

interface IPlatforms {
    platform: {name: string}
}

export interface ICard {
    background_image: string;
    name: string
    rating: number;
    released: number | any;
    id: number;
    platforms?: IPlatforms[]
}