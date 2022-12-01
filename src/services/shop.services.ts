import {urls} from "./urls";
import {IProduct} from "../interfaces/IProduct";
import {axiosServices} from "./axios.services";

export const shopServices={
    getAll: () => axiosServices.get<IProduct[]>(urls.products),
    getOneProduct: (id: number) => axiosServices.get<IProduct>(urls.products + '/' + id),
}