import { Module } from "@nestjs/common"
import { UserController } from "../controllers/user.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserCreateService } from "../services/user.create.service";
import { UserListService } from "../services/user.list.service";
import { UserShowService } from "../services/user.show.service";
import { UserUpdateService } from "../services/user.update.service";
import { UserUpdatePartialService } from "../services/user.updatePartial.service";
import { UserDeleteService } from "../services/user.delete.service";

@Module({
    imports: [PrismaModule], 
    controllers: [UserController],
    providers: [
        UserCreateService,
        UserListService,
        UserShowService,
        UserUpdateService,
        UserUpdatePartialService,
        UserDeleteService,
    ],
})
export class UserModule { }
