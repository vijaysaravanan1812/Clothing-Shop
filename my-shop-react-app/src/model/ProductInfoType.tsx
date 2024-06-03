
interface Product {
    id: string;
    title: string;
    description: string;
    category: string;
    maxRetailPrice: number;
    discountPercentage: number;
    rating: string;
    review: string;
    label?: string;
    imgSrc: string;
    reviews: Review[];
  }
  
interface Review {
    name: string;
    email: string;
    phone: string;
    feedback: string;
    productRating: number;
    id: number;
}
  