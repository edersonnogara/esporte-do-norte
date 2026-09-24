export interface CreateOrganizationDto {
  name: string;

  slug: string;

  email?: string;

  phone?: string;

  city?: string;

  state?: string;
}