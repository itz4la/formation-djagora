import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MenuDto } from './dto/menu.dto';

@Injectable()
export class MenuService {

    constructor(private prisma : PrismaService){}

    async findAllMenu(){
      try{
        const menu = await this.prisma.menu.findMany();
        return menu;
      }catch(err){
        return false;
      }
    }

    async findMenuByName(name : string){
      try{
        const menu = this.prisma.menu.findUnique({ where : { name : name } });
        return menu;
      }catch(err){
        return false;
      }
    }

    async createMenu(data : MenuDto){
      try{
        const menu = await this.prisma.menu.create({ data : data });
        return menu;
      }catch(err){
        return false;
      } 


      
    }
    async deleteMenu(name : string){
      try{
       await this.prisma.menu.delete({ where : { name : name } });
       return { message : "Menu deleted successfully" };
      }catch(err){
        return false;
      }
  }


}