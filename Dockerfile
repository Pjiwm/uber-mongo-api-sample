FROM node:latest
WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app/
# RUN npm config set user 0
# RUN npm config set unsafe-perm true
COPY package*.json ./
RUN npm install
RUN wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-debian92-x86_64-100.3.1.deb && \
    apt install ./mongodb-database-tools-*.deb && \
    rm -f mongodb-database-tools-*.deb
# COPY . .
EXPOSE 3000
USER node
CMD ["npm", "start"]
