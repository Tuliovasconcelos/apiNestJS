import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserExistsService {

    constructor(private readonly prisma: PrismaService) { }

    async exists(id: number) {

        if (!(await this.prisma.user.count({
            where: {
                id: id.toString()
            }
        }))) {
            throw new NotFoundException(`O usuário ${id} não existe.`)
        }
    }



}