import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts,addProduct,delProduct,updProduct } from './counterAPI';

const initialState = {
  value: 0,
  products:[]
};
// ASYNC
export const fetchProductsAsync = createAsyncThunk(
  'counter/fetchProducts',
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);

// ASYNC
export const addProductAsync = createAsyncThunk(
  'counter/addProduct',
  async (prod) => {
    console.log(prod);
    const response = await addProduct(prod);
    return response.data;
  }
);

// ASYNC
export const delProductAsync = createAsyncThunk(
  'counter/delProduct',
  async (id) => {
    const response = await delProduct(id);
    return response.data;
  }
);

// ASYNC
export const updProductAsync = createAsyncThunk(
  'counter/updProduct',
  async (prod) => {
    const response = await updProduct(prod);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {   //SYNC - regular 
    increment: (state) => {
      state.value += 1;
    },
    increment3: (state) => {
      state.value += 3;
    },
    reduce2: (state) => {
      state.value -= 2;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.products = action.payload
        // console.log(action.payload)
      }).addCase(addProductAsync.fulfilled, (state, action) => {
        // state.products = action.payload
        state.products.push(action.payload)
        // console.log(action.payload)
      });
  },
});

export const { increment,increment3,reduce2 } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectProducts = (state) => state.counter.products;
export default counterSlice.reducer;
