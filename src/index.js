// const { typeDefs, resolvers } = require("./schema");

import {ApolloServer} from 'apollo-server-express';
import mongoose from 'mongoose';
import express from 'express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import {
    APP_PORT,
    IN_PROD,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} from './config' 

(async() => {
    try {
        await mongoose.connect(`mongodb://admin:Ramtoo123@ds359077.mlab.com:59077/chat`, {useNewUrlParser: true})

        const app = express()
        app.disable('x-powered-by')
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            playground: !IN_PROD
        })

        server.applyMiddleware({app})

        app.listen({
            port: APP_PORT
        }, () => console.log(`SERVER READY at ${APP_PORT}`))
    } catch (error) {
        console.log("WHAT??");
        console.log(error);
    }
})()
