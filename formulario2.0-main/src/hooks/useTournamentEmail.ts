import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ClashRoyaleFormData, FIFAFormData, FreeFireFormData, EmailMessage } from '../types';

export const useTournamentEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<EmailMessage | null>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (templateData: any) => {
    setIsLoading(true);
    setMessage(null);

    try {
      const emailData = {
        ...templateData,
        to_email: 'futurion1.0@gmail.com',
        app_name: 'CocoTech - Games e Inovação',
        reply_to: templateData.from_email || templateData.captain_email
      };

      await emailjs.send(serviceId, templateId, emailData, publicKey);
      
      setMessage({
        type: 'success',
        text: 'Inscrição enviada com sucesso! Você receberá uma confirmação por email.'
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setMessage({
        type: 'error',
        text: 'Erro ao enviar inscrição. Tente novamente ou entre em contato conosco.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sendClashRoyale = async (data: ClashRoyaleFormData) => {
    const templateData = {
      tournament: 'Clash Royale',
      from_name: data.fullName,
      from_email: data.email,
      phone: data.whatsApp,
      nickname: data.nickname,
      game_tag: data.gameTag,
      submission_date: new Date().toLocaleString('pt-BR')
    };

    await sendEmail(templateData);
  };

  const sendFIFA = async (data: FIFAFormData) => {
    const templateData = {
      tournament: 'FIFA',
      from_name: data.fullName,
      from_email: data.email,
      phone: data.whatsApp,
      platform: data.platform,
      submission_date: new Date().toLocaleString('pt-BR')
    };

    await sendEmail(templateData);
  };

  const sendFreeFire = async (data: FreeFireFormData) => {
    // Montar HTML dos jogadores
    const players_html = data.players
      .map((player, index) => 
        `<tr>
          <td style="padding: 8px; border: 1px solid #ddd;">${index + 1}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${player.name}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${player.gameId}</td>
        </tr>`
      )
      .join('');

    // Montar CSV dos jogadores
    const players_csv = data.players
      .map((player, index) => `${index + 1},${player.name},${player.gameId}`)
      .join('\n');

    const templateData = {
      tournament: 'Free Fire',
      team_name: data.teamName,
      captain_email: data.captainEmail,
      captain_phone: data.captainWhatsApp,
      players_count: data.players.length,
      players_html: `
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 8px; border: 1px solid #ddd;">#</th>
              <th style="padding: 8px; border: 1px solid #ddd;">Nome</th>
              <th style="padding: 8px; border: 1px solid #ddd;">ID Free Fire</th>
            </tr>
          </thead>
          <tbody>
            ${players_html}
          </tbody>
        </table>
      `,
      players_csv: `Posição,Nome,ID Free Fire\n${players_csv}`,
      submission_date: new Date().toLocaleString('pt-BR')
    };

    await sendEmail(templateData);
  };

  const clearMessage = () => setMessage(null);

  return {
    isLoading,
    message,
    clearMessage,
    sendClashRoyale,
    sendFIFA,
    sendFreeFire
  };
};