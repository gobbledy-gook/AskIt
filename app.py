from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import os
import openai
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)
api_key = os.environ.get('API_KEY')
openai.api_key = api_key

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_answer', methods=['POST'])
def GPT_ask():
    print("Hi")
    prompt = request.get_json()
    question = prompt['question']
    response = openai.Completion.create(
        engine="davinci",
        prompt=question,
        max_tokens=50,  # adjust to control length of summary
        n=1,
        temperature=0.1,  # adjust to control creativity of summary
    )
    answer = response.choices[0].text.strip()
    response = jsonify({'answer': answer})
    print(response)
    return response

if __name__ == '__main__':
    app.run(debug=True)
