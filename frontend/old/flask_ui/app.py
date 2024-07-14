import json
import requests
from flask import Flask, render_template, redirect, request

app = Flask(__name__)

def loginAPI(token):
    url = 'http://host.docker.internal:8000/api/token/verify'
    headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
    response = requests.post(url, headers=headers, data=json.dumps({'token':token}))
    return response

def checkLogin(page):
    token = request.cookies.get('token')
    refresh = request.cookies.get('refresh')
    response = loginAPI(token)
    if response.status_code == 200:
        return page
    return redirect("/login")
    
@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'no-store'
    return response

@app.get('/')
@app.get('/account')
def account_page():
    return checkLogin(render_template('account.html'))

@app.get('/login')
def login_page():
    token = request.cookies.get('token')
    refresh = request.cookies.get('refresh')
    response = loginAPI(token)
    if response.status_code == 200:
        return redirect("/")
    return render_template('login.html')

@app.get('/test')
def test_page():
    return render_template('test.html')

@app.get('/test2')
def test2_page():
    return render_template('test2.html')