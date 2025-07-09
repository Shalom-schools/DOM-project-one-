<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Character Counter</title>
</head>
<body>
  <h2>Real-Time Character Counter</h2>

  <textarea id="inputText" maxlength="200" rows="6" cols="50" placeholder="Type here..."></textarea>
  <div id="counter">200 characters remaining</div>

  <script>
    const input = document.getElementById("inputText");
    const counter = document.getElementById("counter");
    const maxChars = 200;

    input.addEventListener("input", function () {
      const remaining = maxChars - input.value.length;
      counter.textContent = `${remaining} characters remaining`;
    });
  </script>
</body>
</html>
