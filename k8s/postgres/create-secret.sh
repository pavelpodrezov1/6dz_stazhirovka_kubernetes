#!/usr/bin/env bash
set -euo pipefail
read -rsp "PostgreSQL password: " DB_PASSWORD
echo
kubectl create secret generic postgres-secret \
  --namespace homework \
  --from-literal=POSTGRES_PASSWORD="$DB_PASSWORD" \
  --dry-run=client -o yaml | kubectl apply -f -
unset DB_PASSWORD
