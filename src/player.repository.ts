import { DeepPartial, EntityManager, FindManyOptions, FindOneOptions, getManager } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

import { Player } from "./player.entity";

export class PlayerRepository {

    public static async insert(model: DeepPartial<Player>, entityManager?: EntityManager): Promise<Player> {
        return await (entityManager || getManager()).save(Player, { ...model });
    }

    public static async findOne(options: FindOneOptions<Player>, entityManager?: EntityManager): Promise<Player | undefined> {
        return await (entityManager || getManager()).findOne(Player, options);
    }

    public static async find(options: FindManyOptions<Player>, entityManager?: EntityManager): Promise<Player[]> {
        return await (entityManager || getManager()).find(Player, options);
    }

    public static async update(criteria: any, partialEntity: QueryDeepPartialEntity<Player>, entityManager?: EntityManager): Promise<void> {
        await (entityManager || getManager()).update(Player, criteria, partialEntity);
    }

    public static async delete(criteria: any, entityManager?: EntityManager): Promise<void> {
        await (entityManager || getManager()).delete(Player, criteria);
    }

}