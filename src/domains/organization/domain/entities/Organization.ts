export interface Organization {
  id: string;

  name: string;

  slug: string;

  document?: string;

  email?: string;

  phone?: string;

  logoUrl?: string;

  primaryColor?: string;

  secondaryColor?: string;

  city?: string;

  state?: string;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}