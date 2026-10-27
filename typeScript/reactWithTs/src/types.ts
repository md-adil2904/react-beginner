// category
// description
// id
// image
// price
// 109.95
// rating {rate: 3.9, count: 120}
// title;

export interface Product {
  id : number;
  title : string;
  category :string;
  description : string;
  image : string;
  price : number;
  rating : {
    rate : number;
    count : number
  }

}
