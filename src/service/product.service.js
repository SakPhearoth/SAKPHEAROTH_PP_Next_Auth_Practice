import headerToken from "@/lib/headerToken";

export async function getAllProductService(){

    const headers = await headerToken();

    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/products`,{
        headers,
    });

    const products = await res.json();
    return products;
}