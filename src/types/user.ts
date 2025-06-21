export interface User {
  id: number;
  email: string;
  password: string; // Hashed password
  created_at?: Date;
  updated_at?: Date;
}