from flask import Flask, request, jsonify
from flask_cors import CORS
import torch, random, time
from transformers import AutoTokenizer, AutoModelForCausalLM

app = Flask(__name__)
CORS(app)

# Load model
tokenizer = AutoTokenizer.from_pretrained("nilq/mistral-1L-tiny")
model = AutoModelForCausalLM.from_pretrained("nilq/mistral-1L-tiny")
device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)

chat_history = []

@app.route("/ai", methods=["POST"])
def ai_response():
    global chat_history
    user_input = request.json.get("message", "")
    chat_history = chat_history[-5:]
    chat_history.append({"role": "user", "content": user_input})

    try:
        inputs = tokenizer.apply_chat_template(chat_history, add_generation_prompt=True, return_tensors="pt").to(device)
        outputs = model.generate(**inputs, max_new_tokens=50, do_sample=True, temperature=1.2)
        reply = tokenizer.decode(outputs[0], skip_special_tokens=True)
    except Exception as e:
        reply = f"[!] Error: {str(e)}"

    chat_history.append({"role": "assistant", "content": reply})
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
