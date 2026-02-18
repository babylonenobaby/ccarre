FROM node:22

WORKDIR /usr/src/app

# Copy only package.json for caching
COPY packages/db/package*.json ./
RUN npm install

# Copy all source files
COPY packages/db/ ./

EXPOSE 3000

CMD sh -c "npx prisma db push && npx tsx src/server.ts"
