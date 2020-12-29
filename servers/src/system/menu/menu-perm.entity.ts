import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { MenuEntity } from './menu.entity'

@Entity('sys_menu_perm')
export class MenuPermEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ name: 'menu_id', comment: '菜单id' })
  public menuId: number

  @Column({ name: 'api_url', comment: '该菜单所能调用的 api 接口，必须是本应用的接口，否则设置了也不生效' })
  public apiUrl: string

  @Column({ name: 'api_method', comment: '该菜单所能调用 api 接口的 method 方法' })
  public apiMethod: string

  @ManyToOne(() => MenuEntity, (menu) => menu.menuPerms)
  public menu: MenuEntity
}
