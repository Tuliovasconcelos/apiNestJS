import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common"
import { UserController } from "../controllers/user.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserCreateService } from "../services/user.create.service";
import { UserListService } from "../services/user.list.service";
import { UserShowService } from "../services/user.show.service";
import { UserUpdateService } from "../services/user.update.service";
import { UserUpdatePartialService } from "../services/user.updatePartial.service";
import { UserDeleteService } from "../services/user.delete.service";
import { UserIdCheckMiddleware } from "src/middlewares/user-id-check.middleware";
import { UserExistsService } from "../services/user.exists.service";

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
        UserExistsService
    ],
})
//montanto a classe passando middleware para todas as rotas que recebem ID
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: 'users/:id',
            method: RequestMethod.ALL
        })
    }
}
