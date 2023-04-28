import { ReactNode, createContext } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
}

interface ProductContextData {
  products: Product[];
}

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData);

export function ProductProvider({ children }: ProductProviderProps) {
  const products = [{
    id: '123',
    name: 'Product test 1',
    description: 'Product description'
  }];

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}