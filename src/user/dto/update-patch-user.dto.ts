import { CreateUserDTO } from "./create-user.DTO";
import { PartialType } from "@nestjs/mapped-types";

export class UpdatePatchUserDTO extends PartialType(CreateUserDTO) {

}