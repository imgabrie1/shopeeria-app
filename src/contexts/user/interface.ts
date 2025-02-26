export interface iContextUserProps {
  children: React.ReactNode;
}

export interface iProducts {
  productName: string;
  description: string;
  category: string[];
  img:string;
  link: string;
  price: number;
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt: Date | string | null;
}

export interface iDataRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iUserContext {
  products: iProducts[] | null;
  filteredWord: string | null;
  filteredProducts: iProducts[] | null;
  resetToAllProducts: () => void;
  setFilteredWord: React.Dispatch<React.SetStateAction<string | null>>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<iProducts[] | null>>;
  loading: boolean;
  registerUser: (data: iDataRegister) => Promise<void>;
  logout: () => void;
  loadingForm: boolean;
}
