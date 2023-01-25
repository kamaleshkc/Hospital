export interface sliders {
  _id: string
  title: string
  price?: number
  image?: string
  sale_price?: number
  discount_percentage?: number
  category?: string
}

export interface Itemstatic {
  id: number
  title: string
  price?: number
  image?: string
  sale_price?: number
  discount_percentage?: number
  category?: string
  actualPrice?: number
  discountPercentage?: number
}

export const posts = [
    {
      id: 1,
      title: 'Cotton Trouser',
      descripiton: "999",
      publishdate:"21-2-2020",
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/7B9FSC_1639464156.jpg',
    },
    {
      id: 2,
      title: 'Winter Polar Jacket',
      descripiton: "999",
      publishdate:"21-2-2020",
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/JJioZW_1639462629.jpg',
    },
    {
      id: 3,
      title: 'OnePlus Nord N100 4/64GB',
      descripiton: "999",
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/rE4Soa_1639388179.jpg',
      publishdate:"21-2-2020",
      
    },
    {
      id: 4,
      title: 'OnePlus Nord N10 5G',
      descripiton: "999",
      publishdate:"21-2-2020",
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/rE4Soa_1639388179.jpg',
      
    },
  ]

  export const sliders: Itemstatic[] = [
    { id: 1, title: 'Cotton Trouser', price: 999, image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/7B9FSC_1639464156.jpg' },
    { id: 2, title: 'Winter Polar Jacket', price: 1099, image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/JJioZW_1639462629.jpg' },
    {
      id: 3,
      title: 'OnePlus Nord N100 4/64GB',
      price: 22999,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/rE4Soa_1639388179.jpg',
      category: 'mobile',
    },
    {
      id: 4,
      title: 'OnePlus Nord N10 5G',
      price: 33499,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/rE4Soa_1639388179.jpg',
      category: 'mobile',
    },
    {
      id: 5,
      title: 'Redmi Note 10 Pro 8/128 GB',
      actualPrice: 36999,
      price: 35520,
      discountPercentage: 4,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/qYpdhQ_1635491531.jpg',
      category: 'mobile',
    },
    {
      id: 6,
      title: 'Realme GT Neo2 12/256GB',
      price: 60999,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/vZGhqN_1639305402.jpg',
      category: 'mobile',
    },
    {
      id: 7,
      title: 'Xiaomi Mi TV 4X 43 Inch 4K',
      actualPrice: 64999,
      price: 51000,
      discountPercentage: 21.54,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/qYpdhQ_1635491531.jpg',
    },
    {
      id: 8,
      title: 'Sunshine Nail Dryer',
      category: 'health',
      price: 2000,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/zDgMlJ_1565335286.jpg',
    },
    {
      id: 9,
      title: 'Fit Me Matte Lipgloss',
      category: 'health',
      price: 2250,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/prH7rW_1637231714.jpg',
    },
  
    { id: 10, title: 'Cotton Trouser', price: 999, image: 'https://reecharger.com/assets/resources/noimage.jpg' },
    {
      id: 11,
      title: 'Redmi Note 10 Pro 8/128 GB',
      actualPrice: 36999,
      price: 35520,
      discountPercentage: 4,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/qYpdhQ_1635491531.jpg',
      category: 'mobile',
    },
  
    {
      id: 13,
      title: 'Baltra Rubber Hose Pipe 2M',
      actualPrice: 350,
      price: 300,
      discountPercentage: 14,
      category: 'newArrival',
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/8wSgv0_1615273052.jpg',
    },
  
    {
      id: 12,
      title: 'Redmi Note 10 Pro 8/128 GB',
      actualPrice: 36999,
      price: 35520,
      discountPercentage: 4,
      image: 'https://reecharger.com/assets/resources/noimage.jpg',
      category: 'mobile',
    },
  
    {
      id: 14,
      title: 'Baltra Dry Iron BTI-114 Sm',
      actualPrice: 1425,
      price: 1210,
      discountPercentage: 15,
      category: 'newArrival',
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/p7Qizu_1572857131.jpg',
    },
  
    {
      id: 15,
      title: 'Baltra BTI-116 Casual Dry ',
      actualPrice: 1275,
      price: 1080,
      discountPercentage: 15,
      category: 'newArrival',
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/lsKaNq_1572857199.jpg',
    },
    {
      id: 16,
      title: 'Dr Rashel 24k Gold Radianc ',
      price: 2500,
      category: 'health',
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/wtd21j_1637477713.jpg',
    },
    {
      id: 17,
      title: '3Q Beauty Matte Lipstick ',
      price: 190,
      category: 'health',
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/i3VHRL_1637231570.jpg',
    },
  
    {
      id: 18,
      title: 'N+ Soap Basil And Rosemary',
      price: 180,
      category: 'health',
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/z0CEYh_1572843168.jpg',
    },
    {
      id: 19,
      title: 'N+ Vitamin C Toner 100ml',
      price: 440,
      category: 'health',
      image: '	https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/Bdrk3l_1632644081.jpg',
    },
  
    {
      id: 20,
      title: 'Baltra Wave 24" Ceiling Fan',
      actualPrice: 2925,
      price: 2485,
      discountPercentage: 15,
      category: 'newArrival',
      image: 'https://reecharger.com/assets/resources/noimage.jpg',
    },
  
    {
      id: 21,
      title: 'Baltra Chimney Retro BCH-1',
      actualPrice: 17797,
      price: 15125,
      discountPercentage: 15,
      category: 'newArrival',
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/tEb7eg_1639652572.jpg',
    },
    {
      id: 33,
      title: 'OnePlus Nord N100 4/64GB',
      price: 22999,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/rE4Soa_1639388179.jpg',
      category: 'mobile',
    },
  
    {
      id: 66,
      title: 'Realme GT Neo2 12/256GB',
      price: 60999,
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/vZGhqN_1639305402.jpg',
      category: 'mobile',
    },
    {
      id: 22,
      title: 'Baltra Chimney Retro BCH-1',
      actualPrice: 5075,
      price: 4310,
      discountPercentage: 15,
      category: 'newArrival',
      image: 'https://ik.imagekit.io/pwpdm3chysm/uploads/product/tr:w-250/pBrJZz_1547451760.jpg',
    },
  ]