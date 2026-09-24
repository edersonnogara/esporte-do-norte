import { CreateOrganizationDto } from "../../application/dto/CreateOrganizationDto";
import { Organization } from "../entities/Organization";

export interface OrganizationRepository {
  create(data: CreateOrganizationDto): Promise<Organization>;

  findById(id: string): Promise<Organization | null>;

  findAll(): Promise<Organization[]>;

  update(
    id: string,
    data: Partial<CreateOrganizationDto>
  ): Promise<Organization>;

  delete(id: string): Promise<void>;
}