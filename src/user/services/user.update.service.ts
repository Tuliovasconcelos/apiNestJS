import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePatchUserDTO } from "../dto/update-patch-user.dto";

@Injectable()
export class UserUpdateService {

    constructor(private readonly prisma: PrismaService) { }

    async update(id: number, data: UpdatePatchUserDTO) {
        return await this.prisma.user.update({
            data: {
                email: data.email,
                name: data.name,
                password: data.password,
                birthAt: data.birthAt ? new Date(data.birthAt) : undefined
            },
            where: {
                id: id.toString()
            }
        });
    }
}