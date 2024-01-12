import { CameraIcon, EuroIcon, MapPinIcon, TagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  location: {
    city: string;
    district: string;
  };
  category: string;
  images: string[];
}

const products: Product[] = [
  {
    id: "1",
    name: "Iphone",
    price: 950,
    category: "Phones",
    location: {
      city: "Kabul",
      district: "Khar Khan",
    },
    images: ["/images/products/apple-iphone-14-pro-max-1.jpg"],
  },
  {
    id: "2",
    name: "Sumsong",
    price: 1150,
    category: "Phones",

    location: {
      city: "Kabul",
      district: "Shar-e-new",
    },
    images: [
      "/images/products/samsung-galaxy-s23-ultra-showmetech-1920x1024.png",
    ],
  },
  {
    id: "3",
    name: "Dell Laptop",
    price: 1950,

    location: {
      city: "Kabul",
      district: "Macroyan",
    },
    category: "Laptops",

    images: [
      "/images/products/asian-muslim-hijab-woman-using-her-laptop-computer-isolated-white-background_262958-8170.jpg",
    ],
  },

  {
    id: "4",
    name: "Apple M2 Tablet",
    price: 550,
    category: "Tablets",

    location: {
      city: "Kabul",
      district: "Jadi Maiwand",
    },
    images: [
      "/images/products/csm_PXL_20221115_0857194922_2_7_e198cc245e.jpg",
      "/images/products/img_2287-1621270775533.jpeg",
    ],
  },
  {
    id: "5",
    name: "Apple M2 Tablet",
    price: 550,
    category: "Tablets",

    location: {
      city: "Kabul",
      district: "Jadi Maiwand",
    },
    images: [
      "/images/products/img_2287-1621270775533.jpeg",
      "/images/products/csm_PXL_20221115_0857194922_2_7_e198cc245e.jpg",
    ],
  },
  {
    id: "6",
    name: "Gaming Laptop",
    price: 1950,

    location: {
      city: "Kabul",
      district: "Macroyan 4",
    },
    category: "Laptops",

    images: ["/images/products/maxresdefault.jpg"],
  },
];

export default function ProductList() {
  const title = "New Products";
  return (
    <div className="grid gap-1 md:gap-2 p-1 md:p-2">
      {/* <h1 className="text-xl font-bold">{title}</h1> */}
      <div className="grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            className="border-2 hover:border-primary transition-colors duration-300 rounded box-border overflow-hidden"
          >
            <article key={product.id} className="grid gap-1 md:gap-2">
              <figure className="relative">
                <Image
                  className="aspect-square object-cover w-full "
                  alt={product.name}
                  src={product.images[0]}
                  width={512}
                  height={512}
                />
                <span className="badge absolute top-2 right-2 gap-1">
                  <CameraIcon size={14} /> {product.images.length}
                </span>
              </figure>
              <div className="p-1 md:p-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <TagIcon size={14} /> {product.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <EuroIcon size={14} /> {product.price}
                  </span>
                </div>
                <h2 className="line-clamp-1 font-semibold text-lg">
                  {product.name}
                </h2>
                <div className="flex items-center gap-1 line-clamp-1 text-sm">
                  <MapPinIcon size={14} /> {product.location.district},{" "}
                  {product.location.city}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
