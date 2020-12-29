import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsNotEmpty, IsString, Length, IsIn, Min, IsArray, IsOptional } from 'class-validator'

export class UpdateMenuDto {
  @ApiProperty({ description: '菜单id', required: false })
  @IsNumber({}, { message: 'id 类型错误' })
  @IsNotEmpty()
  id: number

  @ApiProperty({ description: '父级菜单', required: false })
  @IsNumber({}, { message: 'parentId 类型错误' })
  @IsNotEmpty({ message: 'parentId 必须填入值' })
  @IsOptional()
  readonly parentId: number

  @ApiProperty({ description: '菜单名称', required: false })
  @IsString({ message: 'name 类型错误' })
  @Length(2, 20, { message: 'name 字符长度在 2~20' })
  @IsOptional()
  readonly name: string

  @ApiProperty({ description: '菜单唯一标识，前端控制页面显隐', required: false })
  @IsString({ message: 'code 类型错误' })
  @IsOptional()
  readonly code: string

  @ApiProperty({ description: '菜单类型 1-菜单/目录 2-tabs 3-按钮', required: false })
  @IsNumber({}, { message: 'type 类型错误' })
  @IsIn([1, 2, 3], { message: 'type 的值只能是 1/2/3，且分别表示菜单/tabs/按钮' })
  @IsOptional()
  readonly type: 1 | 2 | 3

  @ApiProperty({ description: '排序', required: false })
  @IsNumber({}, { message: '排序传值错误' })
  @Min(0)
  @IsOptional()
  readonly orderNum: number
}
