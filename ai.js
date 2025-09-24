async function sendToAI() {
  const input = document.getElementById("userInput").value;
  const responseBox = document.getElementById("aiResponse");

  responseBox.innerText = "Thinking...";

  try {
    const res = await fetch("http://localhost:5000/ai", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({message: input})
    });

    const data = await res.json();
    responseBox.innerText = data.reply;
  } catch (err) {
    responseBox.innerText = "⚠️ Error connecting to AI";
  }
}
