# pip install django-ninja

# python -m venv .venv
# source .venv/bin/activate
# pip install --upgrade pip
# pip install Django
# pip install psycopg2-binary
# pip install djangorestframework
# pip install markdown
# pip install django-filter
# pip install drf-yasg
# pip install python-dotenv
# pip install uvicorn
# pip install bson

# python manage.py createsuperuser

# python manage.py migrate
# python manage.py makemigrations XXX

# source ./.venv/bin/activate
# pip freeze > requirements.txt
# pip uninstall -r requirements.txt -y


python manage.py makemigrations
python manage.py migrate
python manage.py runserver