
export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    amount?: number;
    rating: Rating;
}

interface Rating {
    rate: number;
    count: number;
}
