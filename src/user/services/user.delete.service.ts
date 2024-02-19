import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserDeleteService {

    constructor(private readonly prisma: PrismaService) { }

    async delete(id: number) {
        const user = await this.prisma.user.findUnique({ where: { id: id.toString() } });
        if (!user) {
            throw new NotFoundException(`O usuário ${id} não existe`);
        }
        return this.prisma.user.delete({
            where: {
                id: id.toString()
            }
        });
    }
}
