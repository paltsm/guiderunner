import Account from "src/accounts.entity";
import { Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export default class Token{
    @PrimaryColumn()
    token: string;

    @ManyToOne(() => Account)
    account: Account;
}