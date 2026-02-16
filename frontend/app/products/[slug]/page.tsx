import Image from "next/image";
import { Product } from "@/app/type"; // Import typów
import ProductSelector from "@/app/components/ProductSelector"; // <--- 1. IMPORTUJEMY TWÓJ KOMPONENT

// Funkcja pobierająca JEDEN produkt (pewnie już ją masz)
async function getProduct(slug: string): Promise<Product> {
  const res = await fetch(`http://127.0.0.1:8000/products/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Nie znaleziono produktu");
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* LEWA STRONA: ZDJĘCIE */}
      <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* PRAWA STRONA: INFO + GUZIKI */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

        <p className="text-2xl text-indigo-600 font-bold mb-8">
          {(product.price / 100).toLocaleString("pl-PL", {
            style: "currency",
            currency: "PLN",
          })}
        </p>

        {/* --- TU WSTAWIAMY TWÓJ KOMPONENT --- */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Wybierz rozmiar:
          </h3>

          {/* Przekazujemy listę wariantów do środka */}
          <ProductSelector variations={product.variations} />
        </div>
        {/* ----------------------------------- */}

        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        <button className="mt-8 w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
