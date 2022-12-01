import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../interfaces/IProduct";
import {shopServices} from "../../services";

interface IState {
    products: IProduct[] | null;
    oneProduct: IProduct | null;
    bagArr: IProduct[] ;
    isShowSidebar: boolean;
}
const initialState:IState = {
    products: null,
    oneProduct: null,
    bagArr: [],
    isShowSidebar: false
}

export const getAllProducts = createAsyncThunk<IProduct[], undefined, { rejectValue: string; }>(
    'shopSlice/getAllProducts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await shopServices.getAll();
            return data;
        }
        catch(e){
            return rejectWithValue(e as string);
        }
    }
);
export const getOneProduct = createAsyncThunk<IProduct, number, { rejectValue: string; }>(
    'shopSlice/getOneProduct',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await shopServices.getOneProduct(id);
            return data;
        } catch (e) {
            return rejectWithValue(e as string);
        }
    }
);


export const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers: {
        setShowbar: (state) => {
            state.isShowSidebar = !state.isShowSidebar;
        },
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const findProduct = state.bagArr.find(el => el.id === action.payload.id)
            if (findProduct) {
                state.bagArr = [...state.bagArr].map(el => {
                    if (el.id === action.payload.id && el.amount) {
                        return ({...el, amount: el.amount + 1})
                    }
                    return el
                });
            } else {
                state.bagArr.push({...action.payload, amount: 1});
            }
        },
        decrementAmount: (state, action: PayloadAction<number>) => {
            const findProduct = state.bagArr.find(el => el.id === action.payload)
            if(findProduct) {
                state.bagArr = [...state.bagArr].map(el => {
                    if (el.id === action.payload && el.amount) {
                        return ({...el, amount: el.amount - 1})
                    }
                    return el
                });
            }
            if (findProduct?.amount === 1) {
                state.bagArr = state.bagArr.filter(el => el.id !== action.payload);
            }
        },
        removeCart: (state, action: PayloadAction<number>) => {
            state.bagArr = state.bagArr.filter(el => el.id !== action.payload);
        },
        removeAll: (state) => {
            state.bagArr = []
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getOneProduct.fulfilled, (state, action) => {
                state.oneProduct = action.payload;
            })
    }
});

export const {setShowbar,addToCart,decrementAmount,removeCart,removeAll} = shopSlice.actions
export default shopSlice.reducer