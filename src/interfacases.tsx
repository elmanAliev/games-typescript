export interface ICards {
    cards: ICard[];
}

export interface ICard {
    background_image: string;
    name: string
    rating: number;
    released: number | any;
    id: number;
    platforms?: IPlatforms[]
}

export interface IPlatforms {
    platform: {name: string}
}

export interface IControlsProps {
    onSearch(search: string, selectedFilter: string, selectedSort: any): void;
    
}