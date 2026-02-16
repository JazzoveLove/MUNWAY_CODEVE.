export interface Product {
  id: number;
  drop_id: number;
  name: string;
  slug: string;
  description?: string | null;
  price: number;
  image: string;
  variations: ProductVariation[]
}

export interface ProductVariation{
  product_id:number;
  size:string;
  inventory_qty:number;
  id:number;
  color:string;
}