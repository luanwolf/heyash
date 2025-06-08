// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    }
  }
  return `Bem-vindo! 👋 
  
Aqui estão todos os comandos disponíveis:

<b>${c}</b>
  
[tab]: acionar conclusão.
[ctrl+L]: limpar terminal.`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Abrindo repositório do Github..';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Abrindo Github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Procurando no Google sobre ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Procurando no DuckDuckGo sobre ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Procurando no Reddit sobre ${args.join(' ')}...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permissão negada: com pouco poder vem... nenhuma responsabilidade? `;
};

export const prompt = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/luanwolf/PromptAuxiliar/releases', '_blank'); // ...I'm sorry
  return `Abrindo repositório do Prompt Auxiliar `;
};

export const perfect_world = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/luanwolf/Menu_Autologin_PW/releases/tag/autologin_v03', '_blank'); // ...I'm sorry
  return `Abrindo repositório do Menu de Autologin do Perfect World `;
};

export const minecraft = async (args?: string[]): Promise<string> => {
  window.open('https://www.curseforge.com/minecraft/modpacks/dozamigos', '_blank'); // ...I'm sorry
  return `Abrindo página do Curse Forge `;
};

// Banner
export const home = (args?: string[]): string => {
  return `
 ██████████                                                  ███                           
░░███░░░░███                                                ░░░                            
 ░███   ░░███  ██████   █████████  ██████   █████████████   ████   ███████  ██████   █████ 
 ░███    ░███ ███░░███ ░█░░░░███  ░░░░░███ ░░███░░███░░███ ░░███  ███░░███ ███░░███ ███░░  
 ░███    ░███░███ ░███ ░   ███░    ███████  ░███ ░███ ░███  ░███ ░███ ░███░███ ░███░░█████ 
 ░███    ███ ░███ ░███   ███░   █ ███░░███  ░███ ░███ ░███  ░███ ░███ ░███░███ ░███ ░░░░███
 ██████████  ░░██████   █████████░░████████ █████░███ █████ █████░░███████░░██████  ██████ 
░░░░░░░░░░    ░░░░░░   ░░░░░░░░░  ░░░░░░░░ ░░░░░ ░░░ ░░░░░ ░░░░░  ░░░░░███ ░░░░░░  ░░░░░░  
                                                                  ███ ░███                 
                                                                 ░░██████                  
                                                                  ░░░░░░                   

• Digite <b>help</b> para ver a lista de comandos disponíveis.

• Digite <b>prompt</b> para ir ao repositório do Prompt Auxiliar.

• Digite <b>perfect_world</b> para ir ao repositório do Menu de Autologin do Perfect World.

• Digite <b>minecraft</b> para ver o Modpack disponibilizado no CurseForge.

• Digite <b>repo</b> ou clique <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">aqui</a></u> para acessar o repositório do Github.
`;
};
