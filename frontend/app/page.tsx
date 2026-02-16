import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/type";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://127.0.0.1:8000/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Najnowszy Drop</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-80 w-full bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-indigo-600 font-semibold text-lg">
                  {(product.price / 100).toLocaleString("pl-PL", {
                    style: "currency",
                    currency: "PLN",
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
