import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MenuDto } from './dto/menu.dto';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {

    constructor(private menuService : MenuService){}

    @Get('findAll')
    async getMenu(){
        return await this.menuService.findAllMenu();
    }

    @Get('findByName/:name')
    async getMenuByName(@Param('name') name: string){
        return await this.menuService.findMenuByName(name);
    }

    @Post('create')
    async createMenu(@Body() data : MenuDto){
        const exist = await this.menuService.findMenuByName(data.name);
        if (exist) {
            return { message : "Menu already exist" };
        }
        return await this.menuService.createMenu(data);
    }

    @Delete('delete/:name')
    async deleteMenu(@Param('name') name: string){
        const exist = await this.menuService.findMenuByName(name);
        if (!exist) {
            return { message : "Menu not found" };
        }
        return await this.menuService.deleteMenu(name);
    }
}
