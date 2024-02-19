import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePatchUserDTO } from "../dto/update-patch-user.dto";

@Injectable()
export class UserUpdatePartialService {

    constructor(private readonly prisma: PrismaService) { }

    async updatePartial(id: number, { email, name, password, birthAt }: UpdatePatchUserDTO) {

        const data: any = {};

        email ? data.email = email : null;
        name ? data.name = name : null;
        password ? data.password = password : null;
        birthAt ? data.birthAt = new Date(birthAt) : null;

        return this.prisma.user.update({
            data,
            where: {
                id: id.toString()
            }
        })
    }



}