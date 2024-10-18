kubectl apply -f ./k8s/k8s.yaml -n piggyflow

# kubectl create secret generic piggyflow-env-production --from-env-file=.env.production
# kubectl create secret generic piggyflow-env-production --from-env-file=backend/django-ninja-api/env/.env.production
# kubectl get secret piggyflow-env-production

# backend/django-ninja-api/env/.env.production

minikube delete
minikube start
kubectl create namespace piggyflow

minikube service piggyflow-django-ninja-api-service -n piggyflow
minikube service list
minikube image load piggyflow-django-ninja-api:latest
# minikube service  piggyflow-backend-backend-service --url -n piggyflow

kubectl apply -f ./k8s/backend-deployment.yml -n piggyflow
kubectl get pods -n piggyflow -o wide
kubectl get services -n piggyflow
kubectl get node -n piggyflow
kubectl delete -f ./k8s/backend-deployment.yml -n piggyflow

kubectl logs piggyflow-backend-deployment-fdfbcbd69-477jq -n piggyflow
kubectl describe pod piggyflow-backend-deployment-fdfbcbd69-477jq -n piggyflow

kubectl port-forward service/piggyflow-dajngo-ninja-api-service 8000:8000 -n piggyflow

