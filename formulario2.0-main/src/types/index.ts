export interface Player {
  name: string;
  gameId: string;
}

export interface ClashRoyaleFormData {
  fullName: string;
  email: string;
  whatsApp: string;
  nickname: string;
  gameTag: string;
}

export interface FIFAFormData {
  fullName: string;
  email: string;
  whatsApp: string;
  platform: 'PlayStation' | 'Xbox' | 'PC' | '';
}

export interface FreeFireFormData {
  teamName: string;
  players: Player[];
  captainEmail: string;
  captainWhatsApp: string;
}

export type GameMode = 'freefire' | 'fifa' | 'clashroyale';

export interface EmailMessage {
  type: 'success' | 'error';
  text: string;
}