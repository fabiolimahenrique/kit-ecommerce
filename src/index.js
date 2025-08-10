import prompt from "prompt"
import mainPrompt from "./prompts/prompt-main.js"
import createQrcode from "./services/qrcode/qrcode.js"
import createPassword from "./services/password/password.js";

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
         if (choose.select == 1) await createQrcode();
         if (choose.select == 2) await createPassword();
    })
    prompt.start()
}


main()