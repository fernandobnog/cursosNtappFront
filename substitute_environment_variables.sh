#!/bin/sh

ROOT_DIR=/app

# Replace env vars in files served by NGINX
for file in $ROOT_DIR/assets/*.js* $ROOT_DIR/index.html;
do
  sed -i 's|VITE_VUE_APP_IP_ADDRESS_PLACEHOLDER|'${VITE_VUE_APP_IP_ADDRESS}'|g' $file
  sed -i 's|VITE_VUE_APP_SERVER_PORT_PLACEHOLDER|'${VITE_VUE_APP_SERVER_PORT}'|g' $file
  # Your other variables here...
done
# Starting NGINX
nginx -g 'daemon off;'