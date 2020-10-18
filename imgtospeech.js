const vision = require("@google-cloud/vision");
const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");

// Creates a client
const visClient = new vision.ImageAnnotatorClient();
const texClient = new textToSpeech.TextToSpeechClient();

async function tts(ttsText) {
  const request = {
    input: { text: imageText },
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await texClient.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile("output.mp3", response.audioContent, "binary");
  console.log("Audio content written to file: output.mp3");
}

async function readImg() {
  const fileName = "test.jpg";
  const [result] = await visClient.textDetection(fileName);
  const detections = result.textAnnotations;
  imageText = "";
  detections.splice(0, 1);
  console.log("Text: ");
  detections.forEach((text) => (imageText += text.description + " "));
  console.log(imageText);

  tts(imageText);
}

readImg();
