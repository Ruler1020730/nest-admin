import { Controller, Get, Post, Put, Query, Param, Delete } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger'

import { ResultData } from '../../common/utils/result'

import { FindRoleListDto } from './dto/find-role-list.dto'
import { RoleService } from './role.service'
import { RoleEntity } from './role.entity'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@ApiTags('角色模块')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('list')
  @ApiOperation({ summary: '查询 role list' })
  @ApiOkResponse({ type: RoleEntity, isArray: true })
  async findList(@Query() dto: FindRoleListDto): Promise<ResultData> {
    return await this.roleService.findList(dto)
  }

  @Get('one/:id')
  @ApiOperation({ summary: '查询单个角色详情及权限菜单' })
  @ApiOkResponse({ type: RoleEntity })
  async findOne(@Param('id') id: number): Promise<ResultData> {
    return await this.roleService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: '创建角色' })
  async create(dto: CreateRoleDto): Promise<ResultData> {
    return await this.roleService.create(dto)
  }

  @Put()
  @ApiOperation({ summary: '更新角色' })
  async update(dto: UpdateRoleDto): Promise<ResultData> {
    return await this.roleService.update(dto)
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<ResultData> {
    return await this.roleService.delete(id)
  }
}
