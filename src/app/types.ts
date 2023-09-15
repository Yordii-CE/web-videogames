// Define el modelo de usuario.
export interface UserRead {
  email: string;
  password: string;
  // Otros campos del usuario, como nombre, correo, etc.
}

export interface UserCreate {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  // Otros campos del usuario, como nombre, correo, etc.
}

export interface Game {
  title: string;
  description: string;
  releaseDate: string;
  image: string;
  rating: number;
  downloads: number;
  commingSoon: boolean;
}
