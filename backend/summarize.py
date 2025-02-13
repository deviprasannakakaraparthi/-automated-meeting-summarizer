from transformers import pipeline

summarizer = pipeline("summarization", model="t5-small")

def generate_summary(text):
    summary = summarizer(text, max_length=150, min_length=50, do_sample=False)
    return summary[0]['summary_text']

if __name__ == "__main__":
    input_text = "Long meeting transcript here..."
    print(generate_summary(input_text))

