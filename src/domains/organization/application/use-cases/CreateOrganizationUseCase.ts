import { CreateOrganizationDto } from "../dto/CreateOrganizationDto";
import { OrganizationRepository } from "../../domain/repositories/OrganizationRepository";

export class CreateOrganizationUseCase {
  constructor(
    private repository: OrganizationRepository
  ) {}

  async execute(data: CreateOrganizationDto) {
    return this.repository.create(data);
  }
}