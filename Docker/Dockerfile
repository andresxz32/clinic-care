# Etapa de build: usar Node para compilar la app
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build --prod

# Etapa final: imagen ligera con Nginx
FROM nginx:stable-alpine

# Copiar el archivo de configuración personalizado de Nginx
COPY Docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos compilados desde la etapa de build
COPY --from=build /app/dist/clinic-care/browser /usr/share/nginx/html

# Establecer permisos adecuados
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Verificación de estado
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost || exit 1

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx en modo foreground
CMD ["nginx", "-g", "daemon off;"]
