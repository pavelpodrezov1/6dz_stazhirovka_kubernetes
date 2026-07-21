FROM nginx:1.28-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html app.js styles.css config.js /usr/share/nginx/html/

RUN chown -R 101:101 /usr/share/nginx/html /etc/nginx/nginx.conf

USER 101:101
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
