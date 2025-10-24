// src/data/ciscoCommands.ts

// --- (Copiază aici INTERFEȚELE TypeScript: Command, Section, CategoryData, CommandData) ---
// --- (Le-am omis aici pentru a scurta, dar trebuie incluse ca în răspunsul anterior) ---
export interface Command { cmd: string; desc: string; example: string; syntax?: string; notes?: string; difficulty?: 'basic' | 'intermediate' | 'advanced'; platform?: 'IOS' | 'IOS-XE' | 'ASA' | 'General'; officialSource?: string;}
export interface Section { name: string; description?: string; commands: Command[];}
export interface CategoryData { title: string; iconName: keyof typeof import('lucide-react'); color: string; description?: string; sections: Section[];}
export type CommandData = Record<string, CategoryData>;


// --- START Date Comenzi (Structură și Exemple Inițiale) ---
export const ciscoCommands: CommandData = {
  ccna1: {
    title: "CCNA 1 - Introduction to Networks",
    iconName: "Network",
    color: "bg-blue-500",
    description: "Fundamentele rețelelor, modele OSI/TCP/IP, configurare de bază Cisco IOS.",
    sections: [
      {
        name: "Basic Router/Switch Configuration",
        description: "Comenzi esențiale pentru configurarea inițială.",
        commands: [
          { cmd: "enable", desc: "Intră în modul privilegiat EXEC.", example: "Router> enable", syntax: "enable", difficulty: "basic", platform: 'IOS', officialSource: "..." },
          { cmd: "configure terminal", desc: "Intră în modul de configurare globală.", example: "Router# configure terminal", syntax: "configure terminal", difficulty: "basic", platform: 'IOS', officialSource: "..." },
          { cmd: "hostname [name]", desc: "Setează numele (hostname) al dispozitivului.", example: "Router(config)# hostname R1", syntax: "hostname <WORD>", difficulty: "basic", platform: 'IOS', notes: "Bună practică: nume unic și descriptiv.", officialSource: "..." },
          { cmd: "enable secret [password]", desc: "Setează parola criptată (Type 5) pentru modul privilegiat.", example: "Router(config)# enable secret Cisco123", syntax: "enable secret <password>", difficulty: "basic", platform: 'IOS', notes: "Recomandat față de 'enable password'.", officialSource: "..." },
          // Adăugați mai multe comenzi CCNA 1 aici
        ]
      },
      // Alte secțiuni CCNA 1
    ]
  },
  // Placeholder pentru alte categorii
  iosSecurity: { title: "IOS Security", iconName: "Shield", color: "bg-red-500", description: "Securizare IOS.", sections: [] },
  asaFirewall: { title: "ASA Firewall", iconName: "Server", color: "bg-orange-500", description: "Comenzi ASA.", sections: [] },
};
