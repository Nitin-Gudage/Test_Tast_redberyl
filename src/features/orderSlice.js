// // src/redux/features/orderSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// import { OrderList } from '../utils/Constant'; // Assuming your JSON data is stored here

// const initialState = {
//     orders: OrderList,
//     filteredOrders: OrderList,
//     statusFilter: '',
//     companyFilter: '',
// };

// const orderSlice = createSlice({
//     name: 'orders',
//     initialState,
//     reducers: {
//         setOrders: (state, action) => {
//             state.orders = action.payload;
//             state.filteredOrders = action.payload;
//         },
//         filterByStatus: (state, action) => {
//             state.statusFilter = action.payload;
//             state.filteredOrders = state.orders.filter(order =>
//                 action.payload ? order.status.toLowerCase() === action.payload.toLowerCase() : true
//             );
//         },
//         filterByCompany: (state, action) => {
//             state.companyFilter = action.payload;
//             state.filteredOrders = state.orders.filter(order =>
//                 action.payload ? order.company.toLowerCase().includes(action.payload.toLowerCase()) : true
//             );
//         },
//         clearFilters: (state) => {
//             state.statusFilter = '';
//             state.companyFilter = '';
//             state.filteredOrders = state.orders;
//         },
//     },
// });

// export const { setOrders, filterByStatus, filterByCompany, clearFilters } = orderSlice.actions;
// export default orderSlice.reducer;
