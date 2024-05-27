# Etapa de construção
FROM node:current-slim as build-stage
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
RUN npm install

# Copiar o resto dos arquivos do projeto
COPY ./ ./

# Construir o aplicativo
RUN npx vite build

# Etapa de produção
FROM nginx:stable as production-stage
RUN mkdir /app

# Copiar a aplicação construída para o contêiner nginx
COPY --from=build-stage /app/dist /app

# Copiar configuração do nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Substituir comportamento padrão do contêiner NGINX
COPY ./substitute_environment_variables.sh /usr/bin/substitute_environment_variables.sh
RUN chmod +x /usr/bin/substitute_environment_variables.sh
ENTRYPOINT ["substitute_environment_variables.sh"]
