import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        s_products: [
            {
                productId: 1,
                title: 'BandShirt "PWD" #1',
                description: 'B/W Band Shirt \n...',
                avatar: 't_shirt_1.png',
                cost: 60,
                amountInCart: 1
            },
            {
                productId: 2,
                title: 'BandShirt "PWD" #2',
                description: 'B/W Band Shirt \n...',
                avatar: 't_shirt_2.png',
                cost: 65,
                amountInCart: 1
            },
            {
                productId: 3, 
                title: 'BandShirt "PWD" #3',
                description: 'B/W Band Shirt \n...',
                avatar: 't_shirt_3.png',
                cost: 70,
                amountInCartt: 1
            },
            {
                productId: 4,
                title: 'BandShirt "PWD" #4',
                description: 'B/W Band Shirt \n...',
                avatar: 't_shirt_4.png',
                cost: 45,
                amountInCart: 1
            },
            {
                productId: 5,
                title: 'BandShirt "PWD" #5',
                description: 'Color Band Shirt \n...',
                avatar: 't_shirt_5.png',
                cost: 55,
                amountInCart: 1
            },
            {
                productId: 6, 
                title: 'BandShirt "PWD" #6',
                description: 'B/W Band Shirt \n...',
                avatar: 't_shirt_6.png',
                cost: 55,
                amountInCart: 1
            },
            {
                productId: 7,
                title: 'BandShirt "PWD" #7',
                description: 'Color Band Shirt \n...',
                avatar: 't_shirt_7.png',
                cost: 50,
                amountInCart: 1
            },
            {
                productId: 8,
                title: 'BandShirt "PWD" #8',
                description: 'Color Band Shirt \n...',
                avatar: 't_shirt_8.png',
                cost: 60,
                amountInCart: 1
            },
            {
                productId: 9, 
                title: 'BandShirt "PWD" #9',
                description: 'B/W Band Shirt \n...',
                avatar: 't_shirt_9.png',
                cost: 70,
                amountInCart: 1
            }
        ],
    },
    reducers: {
        
        }
    }
)

export const {} = shopSlice.actions;
export default shopSlice.reducer;