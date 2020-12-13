import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ description: '用户账号' })
  @IsString({ message: 'account 类型错误，正确类型 string' })
  @IsNotEmpty({ message: 'account 不能为空' })
  @MinLength(6, { message: '账号至少6个字符' })
  @MaxLength(20, { message: '账号最多20个字符' })
  readonly account: string

  @ApiProperty({ description: '密码' })
  @IsString({ message: 'password 类型错误，正确类型 string' })
  @IsNotEmpty({ message: 'password 不能为空' })
  password: string

  @ApiProperty({ description: '手机号' })
  @IsString({ message: 'phoneNum 类型错误，正确类型 string' })
  @IsPhoneNumber('CH', { message: '请输入正确的手机号' })
  readonly phoneNum: string

  @ApiProperty({ description: '邮箱' })
  @IsString({ message: 'email 类型错误，正确类型 string' })
  @IsEmail()
  readonly email: string

  @ApiProperty({ description: '确认密码' })
  @IsString({ message: ' confirmPassword 类型错误，正确类型 string' })
  readonly confirmPassword: string

  @ApiProperty({ description: '头像' })
  @IsString({ message: 'avatar 类型错误，正确类型 string' })
  readonly avatar: string
}
