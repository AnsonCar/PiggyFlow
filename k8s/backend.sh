kubectl apply -f ./k8s/backend-pgsql.yml -n piggyflow
kubectl apply -f ./k8s/backend-redis.yml -n piggyflow
kubectl apply -f ./k8s/backend-django-ninja-api.yml -n piggyflow