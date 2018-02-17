FROM node:8.4.0
EXPOSE 1337
ENV PORT=1337
WORKDIR /opt/app/
COPY . .
RUN npm install && npm run tsc
CMD ["npm","start"]
