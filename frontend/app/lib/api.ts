import { Product } from "@/app/types";

const API_URL = "http://127.0.0.1:8000";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Nie udało się pobrać produktów");
  }

  return res.json();
}

export async function getProduct(slug: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Nie znaleziono produktu");
  }

  return res.json();
}
