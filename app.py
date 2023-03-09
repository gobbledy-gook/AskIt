from flask import Flask, render_template, request, jsonify
import os
import openai

app = Flask(__name__)
api_key = os.environ.get('API_KEY')
openai.api_key = api_key

# Set up CORS headers
@app.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    return response

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-answer', methods=['POST'])
def GPT_ask():
    prompt = request.get_json()
    question = prompt['question']
    print(question)
    response = openai.Completion.create(
        engine="curie",
        prompt=question,
        max_tokens=100,  # adjust to control length of summary
        n=1,
        temperature=0.5,  # adjust to control creativity of summary
    )
    answer = response.choices[0].text.strip()
    print(answer)
    return answer

if __name__ == '__main__':
    app.run()
