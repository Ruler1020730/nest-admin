import { Controller, Query, Get, Param, Put, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiParam, ApiOkResponse } from '@nestjs/swagger'

import { UserService } from './user.service'
import { ResultData } from '../../common/utils/result'

import { FindUserListDto } from './dto/find-user-list.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserEntity } from './user.entity'

@ApiTags('用户账号相关')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  @ApiOperation({ summary: '查询用户列表' })
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findList(@Query() dto: FindUserListDto): Promise<ResultData> {
    return await this.userService.findList(dto)
  }

  @Get('one/:id')
  @ApiOperation({ summary: '根据id 查询用户信息' })
  @ApiOkResponse({ type: UserEntity })
  @ApiParam({ name: 'id' })
  async findOne(@Param('id') id: number): Promise<ResultData> {
    return await this.userService.findOne(id)
  }

  @Get(':id/role')
  @ApiOperation({ summary: '查询用户角色id集合' })
  @ApiOkResponse({ type: Number, isArray: true })
  async findUserRole(@Param('id') id: number): Promise<ResultData> {
    return await this.userService.findUserRole(id)
  }

  @Put()
  @ApiOperation({ summary: '更新用户信息' })
  async update(@Body() dto: UpdateUserDto): Promise<ResultData> {
    return await this.userService.update(dto)
  }
}
