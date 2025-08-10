import prompt from "prompt"
import promptQrcode from "../../prompts/prompt-qrcode.js"
import handle from "./handler.js"

async function createQrcode() {
    prompt.get(promptQrcode, handle)
    prompt.start();
}

export default createQrcode