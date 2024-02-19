import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserShowService {

    constructor(private readonly prisma: PrismaService) { }

    async show(id: number) {
        return this.prisma.user.findUnique(
            {
                where: {
                    id: id.toString()
                }
            });
    }

}