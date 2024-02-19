import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserListService {

    constructor(private readonly prisma: PrismaService) { }

    async list() {
        return this.prisma.user.findMany();
    }

}