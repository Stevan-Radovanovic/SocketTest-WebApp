import { config } from "dotenv";
config();

import { createConnection } from "typeorm";
import { createServer } from "http";
import app from "./src/app";
import { Server } from "socket.io";
import { PlayerRepository } from "./src/player.repository";

export let io: Server;

(async function main(): Promise<void> {

    try {
        
        await createConnection();

        const server = createServer(app);

        const io = new Server(server,
            {
              cors: {
                origin: ["http://localhost:4200"]
              }
            }
        )

        io.on('connection', async (socket) => {

            console.log('New Client is Connected! ', socket.id);
            const players = await PlayerRepository.find({});
            io.emit('playerListRetrieved',{players});

            socket.on('createPlayer',async (player) => {         
                const createdPlayer = await PlayerRepository.insert(player);
                io.emit('playerAdded',{player: createdPlayer});
            });

        })

        server.listen(8080);
        console.log('Ready')

    } catch (error) {
        console.log(error)
        process.exit(-1);
    }

})();
