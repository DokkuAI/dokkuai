import { Module } from "@nestjs/common";
import UserModule from "src/user/user.module";
import AuthController from "./auth.controller";
import AuthService from "./auth.service";
import UtilsModule from "src/utils/utils.module";

@Module({
    imports:[UserModule, UtilsModule],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export default class AuthModule{}