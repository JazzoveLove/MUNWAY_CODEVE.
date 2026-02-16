export interface Product {
  id: number;
  drop_id: number;
  name: string;
  slug: string;
  description?: string | null;
  price: number;
  image: string;
  variations: ProductVariation[];
}

export interface ProductVariation {
  id: number;
  product_id: number;
  size: string;
  color: string;
  inventory_qty: number;
}
