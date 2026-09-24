import { supabase } from "@/infrastructure/database/client/supabase";

import { CreateOrganizationDto } from "../../application/dto/CreateOrganizationDto";
import { Organization } from "../../domain/entities/Organization";
import { OrganizationRepository } from "../../domain/repositories/OrganizationRepository";

export class SupabaseOrganizationRepository
  implements OrganizationRepository
{
  async create(data: CreateOrganizationDto): Promise<Organization> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Organization | null> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Organization[]> {
    throw new Error("Method not implemented.");
  }

  async update(
    id: string,
    data: Partial<CreateOrganizationDto>
  ): Promise<Organization> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}