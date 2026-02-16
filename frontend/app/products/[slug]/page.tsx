import Image from "next/image";
import ProductSelector from "@/app/components/ProductSelector";
import { getProduct } from "@/app/lib/api";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

        <p className="text-2xl text-indigo-600 font-bold mb-8">
          {(product.price / 100).toLocaleString("pl-PL", {
            style: "currency",
            currency: "PLN",
          })}
        </p>

        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Wybierz rozmiar:
          </h3>
          <ProductSelector variations={product.variations} />
        </div>

        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        <button className="mt-8 w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
