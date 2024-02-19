import { Body, Controller, Get, Param, Patch, Post, Put, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UpdatePutUserDTO } from "../dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "../dto/update-patch-user.dto";
import { UserCreateService } from "../services/user.create.service";
import { UserListService } from "../services/user.list.service";
import { UserShowService } from "../services/user.show.service";
import { UserUpdateService } from "../services/user.update.service";
import { UserUpdatePartialService } from "../services/user.updatePartial.service";
import { UserDeleteService } from "../services/user.delete.service";

@Controller('users')
export class UserController {

    constructor(
        private readonly userCreateService: UserCreateService,
        private readonly userListService: UserListService,
        private readonly userShowService: UserShowService,
        private readonly userUpdateService: UserUpdateService,
        private readonly userUpdatePartialService: UserUpdatePartialService,
        private readonly userDeleteService: UserDeleteService
    ) { }

    @Post()
    async create(@Body() data: CreateUserDTO) {
        return await this.userCreateService.create(data);
    }

    @Get()
    async list() {
        return await this.userListService.list();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {
        return await this.userShowService.show(id);
    }

    @Put(':id')
    async update(@Body() data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
        return await this.userUpdateService.update(id, data);
    }

    @Patch(':id')
    async updatePatial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userUpdatePartialService.updatePartial(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.userDeleteService.delete(id);
    }

}
