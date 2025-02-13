from flask import Flask, request, jsonify
import whisper
from transformers import pipeline

app = Flask(__name__)

transcriber = whisper.load_model("base")
summarizer = pipeline("summarization", model="t5-small")

@app.route('/upload', methods=['POST'])
def upload_audio():
    file = request.files['file']
    file.save("temp_audio.mp3")

    transcript = transcriber.transcribe("temp_audio.mp3")["text"]
    summary = summarizer(transcript, max_length=150, min_length=50, do_sample=False)[0]['summary_text']

    return jsonify({"transcript": transcript, "summary": summary})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

