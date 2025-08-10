import chalk from "chalk";

const promptQrcode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o Qrcode"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de Qrcode (1- Normal ou 2- Terminal)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptQrcode;
