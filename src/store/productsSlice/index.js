import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getProducts = createAsyncThunk('productsSlice/getProducts', async (_, { dispatch, rejectWithValue }) => {
    const response = await axios.get('https://premier.dbc-server.uz/api/products')
    dispatch(setProducts(response.data.data))
})

const initialState = {
    products: []
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload
        }
    }
})

const { setProducts } = productsSlice.actions
export default productsSlice.reducer